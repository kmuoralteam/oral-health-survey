// 監聽自然牙數量選項的變更
document.querySelectorAll('input[name="naturalTeeth"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const teethValue = this.value;
        
        // 如果自然牙數量為 0，顯示全口假牙選項
        if (teethValue === "0") {
            document.getElementById("denturesSection").style.display = "block";
            document.getElementById("brushingSection").style.display = "none";
        } 
        // 如果有自然牙，顯示刷牙習慣問題
        else {
            document.getElementById("denturesSection").style.display = "none";
            document.getElementById("brushingSection").style.display = "block";
        }
    });
});

// 表單提交後的回饋處理
function submitForm() {
    const teethCount = document.querySelector('input[name="naturalTeeth"]:checked').value;
    const fullDentures = document.querySelector('input[name="fullDentures"]:checked') ? document.querySelector('input[name="fullDentures"]:checked').value : null;
    const brushingTimes = document.getElementById("brushingTimes").value;
    const brushingTimesOfDay = Array.from(document.querySelectorAll('input[name="brushingTimesOfDay"]:checked')).map(cb => cb.value);
    const brushingDuration = document.querySelector('input[name="brushingDuration"]:checked') ? document.querySelector('input[name="brushingDuration"]:checked').value : null;
    const smoking = document.getElementById("smoking").value;
    const drinking = document.getElementById("drinking").value;
    const betelNut = document.getElementById("betelNut").value;
    const oralIssues = document.getElementById("oralIssues").value;
    const otherQuestions = document.getElementById("otherQuestions").value;

    let feedbackText = "";

    // 個性化回饋部分
    // 自然牙數量為 0 的回饋
    if (teethCount == "0") {
        if (fullDentures === "both") {
            feedbackText += "您有上下顎的全口假牙，請注意假牙清潔與保養，定期檢查口腔健康。<br>";
        } else if (fullDentures === "upper") {
            feedbackText += "您有上顎假牙，請注意清潔與保養，並定期檢查。<br>";
        } else if (fullDentures === "lower") {
            feedbackText += "您有下顎假牙，請注意清潔與保養，並定期檢查。<br>";
        } else {
            feedbackText += "您是全口無牙患者，請留意飲食與口腔健康，建議定期檢查。<br>";
        }
    } 
    // 自然牙數量不為 0 的回饋
    else {
        feedbackText += `您有自然牙，並且每天刷牙 ${brushingTimes} 次。<br>您在 ${brushingTimesOfDay.join('、')} 時刷牙。<br>`;
    }

    // 刷牙時間不夠長的回饋
    if (brushingDuration !== "3MinutesOrMore") {
        feedbackText += "建議每次刷牙的時間至少三分鐘，以確保清潔效果。<br>";
    }
    
    if (smoking == "是") {
        feedbackText += "抽菸會增加牙齦病變與口腔癌的風險，建議儘早戒菸。<br>";
    }
    if (drinking == "是") {
        feedbackText += "飲酒過量會影響口腔健康，建議適量飲酒並定期檢查。<br>";
    }
    if (betelNut == "是") {
        feedbackText += "嚼檳榔是口腔癌的高風險行為，建議戒除檳榔並定期檢查。<br>";
    }

    if (oralIssues) {
        feedbackText += `您提到的口腔不適是：${oralIssues}。建議儘早就醫檢查。<br>`;
    }
    if (otherQuestions) {
        feedbackText += `您詢問的其他問題是：${otherQuestions}。我們會進一步回答您的問題。<br>`;
    }

    // 顯示回饋
    document.getElementById("feedbackText").innerHTML = feedbackText;
    document.getElementById("feedback").style.display = "block";
}
