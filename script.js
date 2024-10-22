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
    const teethCount = document.querySelector('input[name="naturalTeeth"]:checked') ? document.querySelector('input[name="naturalTeeth"]:checked').value : null;
    const fullDentures = document.querySelector('input[name="fullDentures"]:checked') ? document.querySelector('input[name="fullDentures"]:checked').value : null;
    const brushingTimes = document.getElementById("brushingTimes").value ? document.getElementById("brushingTimes").value : "未填寫";
    const brushingTimesOfDay = Array.from(document.querySelectorAll('input[name="brushingTimesOfDay"]:checked')).map(cb => cb.value);
    const brushingDuration = document.querySelector('input[name="brushingDuration"]:checked') ? document.querySelector('input[name="brushingDuration"]:checked').value : null;
    const smoking = document.querySelector('input[name="smoking"]:checked') ? document.querySelector('input[name="smoking"]:checked').value : null;
    const drinking = document.querySelector('input[name="drinking"]:checked') ? document.querySelector('input[name="drinking"]:checked').value : null;
    const betelNut = document.querySelector('input[name="betelNut"]:checked') ? document.querySelector('input[name="betelNut"]:checked').value : null;
    const question31 = document.querySelector('input[name="question3-1"]:checked').value ? document.querySelector('input[name="question3-1"]:checked').value : null;
    const question32 = document.querySelector('input[name="question3-2"]:checked').value ? document.querySelector('input[name="question3-2"]:checked').value : null;
    const question33 = document.querySelector('input[name="question3-3"]:checked').value ? document.querySelector('input[name="question3-3"]:checked').value : null;
    const question34 = document.querySelector('input[name="question3-4"]:checked').value ? document.querySelector('input[name="question3-4"]:checked').value : null;
    const question35 = document.querySelector('input[name="question3-5"]:checked').value ? document.querySelector('input[name="question3-5"]:checked').value : null;
    const question36 = document.querySelector('input[name="question3-6"]:checked').value ? document.querySelector('input[name="question3-6"]:checked').value : null;
    const question37 = document.querySelector('input[name="question3-7"]:checked').value ? document.querySelector('input[name="question3-7"]:checked').value : null;
    const question41 = document.querySelector('input[name="question4-1"]:checked').value ? document.querySelector('input[name="question4-1"]:checked').value : null;
    const question42 = document.querySelector('input[name="question4-2"]:checked').value ? document.querySelector('input[name="question4-2"]:checked').value : null;
    const question43 = document.querySelector('input[name="question4-3"]:checked').value ? document.querySelector('input[name="question4-3"]:checked').value : null;
    const question44 = document.querySelector('input[name="question4-4"]:checked').value ? document.querySelector('input[name="question4-4"]:checked').value : null;
    const question45 = document.querySelector('input[name="question4-5"]:checked').value ? document.querySelector('input[name="question4-5"]:checked').value : null;
    const question46 = document.querySelector('input[name="question4-6"]:checked').value ? document.querySelector('input[name="question4-6"]:checked').value : null;
    const question47 = document.querySelector('input[name="question4-7"]:checked').value ? document.querySelector('input[name="question4-7"]:checked').value : null;
    const question48 = document.querySelector('input[name="question4-8"]:checked').value ? document.querySelector('input[name="question4-8"]:checked').value : null;
    const question49 = document.querySelector('input[name="question4-9"]:checked').value ? document.querySelector('input[name="question4-9"]:checked').value : null;
    const question410 = document.querySelector('input[name="question4-10"]:checked').value ? document.querySelector('input[name="question4-10"]:checked').value : null;
    const question411 = document.querySelector('input[name="question4-11"]:checked').value ? document.querySelector('input[name="question4-11"]:checked').value : null;
    const question412 = document.querySelector('input[name="question4-12"]:checked').value ? document.querySelector('input[name="question4-12"]:checked').value : null;

   
    let feedbackText = "";

    // 個性化回饋部分
    if (teethCount === "0") {
        if (fullDentures === "both") {
            feedbackText += "您有上下顎的全口假牙，請注意假牙清潔與保養，定期檢查口腔健康。現在要教你清潔假牙的正確方式：第一個步驟是要使用軟毛牙刷和清水清潔假牙，這邊要注意不可以使用牙膏喔！因為牙膏會磨傷我們的假牙。第二個步驟是要使用假牙清潔錠，每個廠牌的假牙清潔錠不一樣有的泡5分鐘就要拿起來，有的要泡15分鐘，有的可以泡在裡面一整晚<br>";
        } 
        else if (fullDentures === "upper") {
            feedbackText += "您有上顎假牙，請注意清潔與保養，並定期檢查。<br>";
        } 
        else if (fullDentures === "lower") {
            feedbackText += "您有下顎假牙，請注意清潔與保養，並定期檢查。<br>";
        }
        else {
            feedbackText += "您是全口無牙患者，請留意飲食與口腔健康，建議定期檢查。<br>";
        }
    } 
    else if (teethCount) {
        feedbackText += `您有自然牙，並且每天刷牙 ${brushingTimes} 次。<br>`;
        if (brushingTimesOfDay.length > 0) {
            feedbackText += `您在 ${brushingTimesOfDay.join('、')} 時刷牙。<br>`;
        } 
        else {
            feedbackText += "您沒有選擇刷牙的時間。<br>";
        }
    }

    // 刷牙時間不夠長的回饋
    if (brushingDuration && brushingDuration !== "3MinutesOrMore") {
        feedbackText += "建議每次刷牙的時間至少三分鐘，以確保清潔效果。<br>";
    } 
    else if (!brushingDuration) {
        feedbackText += "您尚未選擇刷牙的時間長度。<br>";
    }
    
    if (smoking === "是") {
        feedbackText += "抽菸會增加牙齦病變與口腔癌的風險，建議儘早戒菸。<br>";
    }
    if (drinking === "是") {
        feedbackText += "飲酒過量會影響口腔健康，建議適量飲酒並定期檢查。<br>";
    }
    if (betelNut === "是") {
        feedbackText += "嚼檳榔是口腔癌的高風險行為，建議戒除檳榔並定期檢查。<br>";
    }

    var s_answer = [question41, question42, question43, question44, question45, question46, question47, question48, question49, question410, question411, question412]
    var answer = ["口腔中的細菌會利用食物中的糖分產生酸", "象牙質", "餐後及睡前", "附在牙齒表面的細菌及其產物", "牙結石及牙菌斑等堆積在齒齦下", "強化琺瑯質抗酸能力", "三十分鐘", "牙線", "半年", "口腔清潔不徹底", "每次刷兩顆，來回刷十下", "放在冷開水、生理食鹽水、冰牛奶裡或含在口中"]
    var r_answer = ["1. 蛀牙的原因是因為口腔中的細菌會利用食物中的糖分產生酸。", "2. 蛀牙侵蝕到牙齒的象牙質後，牙齒接觸冷或熱的食物會覺得痠痛。", "3. 餐後及睡前刷牙最能保護牙齒。", "4. 牙菌斑是附在牙齒表面的細菌及其產物。", "5. 牙周病的主要原因是堆積在牙齦下的牙結石及牙菌斑。", "6. 氟化物對牙齒的主要功能是強化琺瑯質抗酸能力。", "7. 使用完含氟漱口水後，至少要經過三十分鐘才能吃東西喝水。", "8. 清潔牙齒鄰接面(牙縫)最好的工具是牙線。", "9. 我們應每半年做一次口腔檢查。", "10. 牙齦發炎的主要原因是口腔清潔不徹底。", "11. 貝式刷牙法的要領為牙刷以45°放在牙齒跟牙齦中間，一次刷兩顆，每次刷十下", "12. 若牙齒撞掉脫離牙床，在就醫請牙醫種回去前應將牙齒放在冷開水、生理食鹽水、冰牛奶裡或含在口中"]
    var feedbackanswer = "您第四部分錯誤的地方的解答：<br>";
    var i = 0;
    var j = 0;
    while (i <= 11){
        if (s_answer[i] != answer[i]){
            feedbackanswer += r_answer[i] + "<br>";
            j = j + 1;
        }
        i = i + 1;
    }
    if (j == 0){
        feedbackanswer = "您第四部份的回答全部正確，很棒！<br>"
    }

    feedbackText += feedbackanswer;

    // 顯示回饋
    document.getElementById("feedbackText").innerHTML = feedbackText;
    document.getElementById("feedback").style.display = "block";
}
