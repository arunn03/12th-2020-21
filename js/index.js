function send() {
    let avg10 = (parseFloat(document.getElementById("sub1").value) +
        parseFloat(document.getElementById("sub2").value) +
        parseFloat(document.getElementById("sub3-10").value)) / 6;

    let lang_tot = parseFloat(document.getElementById("lang-tot").value);
    let eng_tot = parseFloat(document.getElementById("eng-tot").value);
    let sub3_tot = parseFloat(document.getElementById("sub3-tot").value);
    let sub4_tot = parseFloat(document.getElementById("sub4-tot").value);
    let sub5_tot = parseFloat(document.getElementById("sub5-tot").value);
    let sub6_tot = parseFloat(document.getElementById("sub6-tot").value);

    let lang = parseFloat(document.getElementById("lang").value) / lang_tot * 20;
    let eng = parseFloat(document.getElementById("eng").value) / eng_tot * 20;
    let sub3 = parseFloat(document.getElementById("sub3").value) / sub3_tot * 20;
    let sub4 = parseFloat(document.getElementById("sub4").value) / sub4_tot * 20;
    let sub5 = parseFloat(document.getElementById("sub5").value) / sub5_tot * 20;
    let sub6 = parseFloat(document.getElementById("sub6").value) / sub6_tot * 20;

    let lang_int_tot = parseFloat(document.getElementById("lang-int-tot").value);
    let eng_int_tot = parseFloat(document.getElementById("eng-int-tot").value);
    let sub3_int_tot = parseFloat(document.getElementById("sub3-int-tot").value);
    let sub4_int_tot = parseFloat(document.getElementById("sub4-int-tot").value);
    let sub5_int_tot = parseFloat(document.getElementById("sub5-int-tot").value);
    let sub6_int_tot = parseFloat(document.getElementById("sub6-int-tot").value);

    let lang_int = parseFloat(document.getElementById("lang-int").value) / lang_int_tot * 30;
    let eng_int = parseFloat(document.getElementById("eng-int").value) / eng_int_tot * 30;
    let sub3_int = parseFloat(document.getElementById("sub3-int").value) / sub3_int_tot * 30;
    let sub4_int = parseFloat(document.getElementById("sub4-int").value) / sub4_int_tot * 30;
    let sub5_int = parseFloat(document.getElementById("sub5-int").value) / sub5_int_tot * 30;
    let sub6_int = parseFloat(document.getElementById("sub6-int").value) / sub6_int_tot * 30;

    lang += avg10 + lang_int;
    eng += avg10 + eng_int;
    sub3 += avg10 + sub3_int;
    sub4 += avg10 + sub4_int;
    sub5 += avg10 + sub5_int;
    sub6 += avg10 + sub6_int;

    lang = Number(lang).toFixed(2);
    eng = Number(eng).toFixed(2);
    sub3 = Number(sub3).toFixed(2);
    sub4 = Number(sub4).toFixed(2);
    sub5 = Number(sub5).toFixed(2);
    sub6 = Number(sub6).toFixed(2);

    var arr = [lang, eng, sub3, sub4, sub4, sub5, sub6];
    for (let i = 0; i < 6; i++) {
        if (Number.isNaN(arr[i])) {
            alert("Please fill in the details properly!!!");
            return;
        }
    }

    localStorage.setItem('sub1', document.getElementById('sub1').value);
    localStorage.setItem('sub2', document.getElementById('sub2').value);
    localStorage.setItem('sub3_10', document.getElementById('sub3-10').value);

    localStorage.setItem('lang', document.getElementById('lang').value);
    localStorage.setItem('eng', document.getElementById('eng').value);
    localStorage.setItem('sub3', document.getElementById('sub3').value);
    localStorage.setItem('sub4', document.getElementById('sub4').value);
    localStorage.setItem('sub5', document.getElementById('sub5').value);
    localStorage.setItem('sub6', document.getElementById('sub6').value);

    localStorage.setItem('lang_tot', document.getElementById('lang-tot').value);
    localStorage.setItem('eng_tot', document.getElementById('eng-tot').value);
    localStorage.setItem('sub3_tot', document.getElementById('sub3-tot').value);
    localStorage.setItem('sub4_tot', document.getElementById('sub4-tot').value);
    localStorage.setItem('sub5_tot', document.getElementById('sub5-tot').value);
    localStorage.setItem('sub6_tot', document.getElementById('sub6-tot').value);

    localStorage.setItem('lang_int_tot', document.getElementById('lang-int-tot').value);
    localStorage.setItem('eng_int_tot', document.getElementById('eng-int-tot').value);
    localStorage.setItem('sub3_int_tot', document.getElementById('sub3-int-tot').value);
    localStorage.setItem('sub4_int_tot', document.getElementById('sub4-int-tot').value);
    localStorage.setItem('sub5_int_tot', document.getElementById('sub5-int-tot').value);
    localStorage.setItem('sub6_int_tot', document.getElementById('sub6-int-tot').value);

    localStorage.setItem('lang_int', document.getElementById('lang-int').value);
    localStorage.setItem('eng_int', document.getElementById('eng-int').value);
    localStorage.setItem('sub3_int', document.getElementById('sub3-int').value);
    localStorage.setItem('sub4_int', document.getElementById('sub4-int').value);
    localStorage.setItem('sub5_int', document.getElementById('sub5-int').value);
    localStorage.setItem('sub6_int', document.getElementById('sub6-int').value);


    var url = window.location.href;
    url += "result.html?l=" + encodeURIComponent(lang) +
        "&e=" + encodeURIComponent(eng) + "&3=" + encodeURIComponent(sub3) +
        "&4=" + encodeURIComponent(sub4) + "&5=" + encodeURIComponent(sub5) +
        "&6=" + encodeURIComponent(sub6);
    window.location.href = url;
}

document.getElementById("sub1").value = localStorage.getItem('sub1');
document.getElementById("sub2").value = localStorage.getItem('sub2');
document.getElementById("sub3-10").value = localStorage.getItem('sub3_10');

document.getElementById("lang-tot").value = localStorage.getItem('lang_tot');
document.getElementById("eng-tot").value = localStorage.getItem('eng_tot');
document.getElementById("sub3-tot").value = localStorage.getItem('sub3_tot');
document.getElementById("sub4-tot").value = localStorage.getItem('sub4_tot');
document.getElementById("sub5-tot").value = localStorage.getItem('sub5_tot');
document.getElementById("sub6-tot").value = localStorage.getItem('sub6_tot');

document.getElementById("lang").value = localStorage.getItem('lang');
document.getElementById("eng").value = localStorage.getItem('eng');
document.getElementById("sub3").value = localStorage.getItem('sub3');
document.getElementById("sub4").value = localStorage.getItem('sub4');
document.getElementById("sub5").value = localStorage.getItem('sub5');
document.getElementById("sub6").value = localStorage.getItem('sub6');

document.getElementById("lang-int-tot").value = localStorage.getItem('lang_int_tot');
document.getElementById("eng-int-tot").value = localStorage.getItem('eng_int_tot');
document.getElementById("sub3-int-tot").value = localStorage.getItem('sub3_int_tot');
document.getElementById("sub4-int-tot").value = localStorage.getItem('sub4_int_tot');
document.getElementById("sub5-int-tot").value = localStorage.getItem('sub5_int_tot');
document.getElementById("sub6-int-tot").value = localStorage.getItem('sub6_int_tot');

document.getElementById("lang-int").value = localStorage.getItem('lang_int');
document.getElementById("eng-int").value = localStorage.getItem('eng_int');
document.getElementById("sub3-int").value = localStorage.getItem('sub3_int');
document.getElementById("sub4-int").value = localStorage.getItem('sub4_int');
document.getElementById("sub5-int").value = localStorage.getItem('sub5_int');
document.getElementById("sub6-int").value = localStorage.getItem('sub6_int');
