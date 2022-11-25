function fetch_country() {
    fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then((data) => {
        return data.json();
    }).then((res) => {
        var country = [];
        for (var i = 0; i < res.length; i++) { country.push(res[i].name); }
        var optionList = document.getElementById('country-options').options;
        country.forEach(option =>
            optionList.add(new Option(option)
            )
        )
    }).catch((err) => console.log(err));
}
function fetch_state() {
    var country = document.form.country.value;
    if (country !== "country") {
        fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then((data) => {
            return data.json();
        }).then((res) => {
            var state = [];
            for (var i = 0; i < res.length; i++) {
                if (res[i].name === country) {
                    for (var j = 0; j < res[i].states.length; j++) {
                        state.push(res[i].states[j].name);
                    }
                }
            }
            var optionList = document.getElementById('state-options').options;
            state.forEach(option =>
                optionList.add(new Option(option)
                )
            )
        }).catch((err) => console.log(err));
    }
}