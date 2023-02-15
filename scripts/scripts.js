function nodify(html) {
	var template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

const pkmnList = document.querySelector('#pkmnList tbody');
let appendedPKMN = [];

pokemon.forEach((pkmn) => {
	if (appendedPKMN.includes(pkmn.id)) return;

	let pkmnArr = [ pkmn ];
	appendedPKMN.push(pkmn.id);

	let currentPKMNEV = pkmn;
	if (currentPKMNEV) {
		console.log(currentPKMNEV);
		pokemon.forEach((pkmnev) => {
			if (!pkmn.ev) return;
			if (pkmn.ev.includes(pkmnev.id)) {
				pkmnArr.push(pkmnev);
				appendedPKMN.push(pkmnev.id);
				currentPKMNEV = pkmnev.ev ? pkmnev.ev : null;
			}
		});
	}
	appendPKMN(pkmnArr);

	console.log(pkmn);
});

function appendPKMN(pkmnArr) {
	let pkmns = '';

	pkmnArr.forEach((pkmn) => {
		pkmns += `<td>
            <div class="pkmn-card">
                <div class="pkmn-header">
                    <span class="pkmn-number">${String(pkmn.id).padStart(3, '0')}</span>
                    <span class="pkmn-gen ${pkmn.gen}">${pkmn.gen || ''}</span>
                </div>
                <div class="pkmn-image"><img src="${pkmn.image}" /></div>
                <div class="pkmn-info">
                    <span class="pkmn-name">${pkmn.name}</span>
                </div>
                <div class="pkmn-types">
                    <span class="pkmn-type ${pkmn.type[0]}">${pkmn.type[0]}</span>
                    <span class="pkmn-type ${pkmn.type[1]}">${pkmn.type[1] || ''}</span>
                </div>
            </div>
        </td>`;
	});

	const pkmnitem = `<tr>${pkmns}</tr>`;
	pkmnList.appendChild(nodify(pkmnitem));
}
