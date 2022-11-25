window.addEventListener('message', function (e) {
    const data = JSON.parse(e.data);
    console.log(data);
    document.getElementById('shows-result').innerHTML=`Result:${data.message}`;
});
