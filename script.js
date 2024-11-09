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

// 控制抽菸選項顯示
function toggleSmokingSection(show) {
    document.getElementById('smokingDetails').style.display = show ? 'block' : 'none';
}

// 控制喝酒選項顯示
function toggleDrinkingSection(show) {
    document.getElementById('drinkingDetails').style.display = show ? 'block' : 'none';
}

// 控制嚼檳榔選項顯示
function toggleBetelNutSection(show) {
    document.getElementById('betelNutDetails').style.display = show ? 'block' : 'none';
}

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
    const question41 = document.querySelector('input[name="question4-1"]:checked') ? document.querySelector('input[name="question4-1"]:checked').value : null;
    const question42 = document.querySelector('input[name="question4-2"]:checked') ? document.querySelector('input[name="question4-2"]:checked').value : null;
    const question43 = document.querySelector('input[name="question4-3"]:checked') ? document.querySelector('input[name="question4-3"]:checked').value : null;
    const question44 = document.querySelector('input[name="question4-4"]:checked') ? document.querySelector('input[name="question4-4"]:checked').value : null;
    const question45 = document.querySelector('input[name="question4-5"]:checked') ? document.querySelector('input[name="question4-5"]:checked').value : null;
    const question46 = document.querySelector('input[name="question4-6"]:checked') ? document.querySelector('input[name="question4-6"]:checked').value : null;
    const question47 = document.querySelector('input[name="question4-7"]:checked') ? document.querySelector('input[name="question4-7"]:checked').value : null;
    const question48 = document.querySelector('input[name="question4-8"]:checked') ? document.querySelector('input[name="question4-8"]:checked').value : null;
    const question49 = document.querySelector('input[name="question4-9"]:checked') ? document.querySelector('input[name="question4-9"]:checked').value : null;
    const question410 = document.querySelector('input[name="question4-10"]:checked') ? document.querySelector('input[name="question4-10"]:checked').value : null;
    const question411 = document.querySelector('input[name="question4-11"]:checked') ? document.querySelector('input[name="question4-11"]:checked').value : null;
    const question412 = document.querySelector('input[name="question4-12"]:checked') ? document.querySelector('input[name="question4-12"]:checked').value : null;
    const subbtn = document.querySelector('input[name="personal_privacy"]:checked') ? document.querySelector('input[name="personal_privacy"]:checked').value : null;
    const age = document.getElementById("age") ? document.getElementById("age").value : "未填寫年齡";

    let feedbackText = "";

    // 個性化回饋部分
    if (age <= 12) {
        feedbackText += "小朋友的牙齒特別容易出現蛀牙，因為他們喜歡甜食、喝含糖飲料，還沒有養成徹底刷牙的習慣。而且他們的牙齒結構比較脆弱，所以更需要特別保護。我們可以幫孩子建立早晚刷牙、飯後漱口的習慣，並控制糖分攝取。含氟牙膏也很重要，因為氟化物可以幫助牙齒抵抗酸的侵蝕，減少蛀牙的風險。再提醒一下，乳牙對孩子來說很重要，不僅幫助吃東西和說話，也有助於未來恆牙的正確生長，所以從小保護牙齒是為了他們一生的口腔健康！<br>"
    } else if (12 < age <= 24) {
        feedbackText += "青少年的牙齒問題很多，比如說蛀牙、咬合不正、牙齦炎等等。齲齒的預防很重要，因為這時候愛吃零食，但刷牙常常沒刷乾淨。建議刷牙要兩分鐘以上，而且記得使用牙線來清理牙縫，這樣可以把細菌和食物殘渣都清乾淨。再來是咬合不正，有些人牙齒不整齊或咬合不正，不僅會影響外觀，還會讓牙齒更難清潔，甚至影響咀嚼功能，這時候可以考慮矯正治療。而牙齦炎在這個年齡段也很常見，尤其是刷牙不徹底的情況下。牙齦會紅腫、出血，這是因為細菌在牙齦邊緣積聚引起發炎，建議養成良好的口腔清潔習慣，並定期去牙科檢查，這樣才能讓牙齒和牙齦保持健康。<br>"
    } else if (24 < age <= 64) {
        feedbackText += "中壯年時期要特別注意牙周病和口腔癌的風險。牙周病其實就是牙齦發炎，如果不及早處理，細菌會慢慢破壞支撐牙齒的骨頭，最後可能導致牙齒鬆動甚至脫落。建議平時除了認真刷牙、用牙線，也可以定期去洗牙，這樣可以去除牙齒上不容易清乾淨的牙結石，減少牙周病風險。保持口腔健康不僅能保護牙齒，也能降低患病風險！<br>"
    } else {
        feedbackText += "銀髮族的朋友們，口腔健康對生活品質影響很大，尤其是口腔機能，包括咀嚼、吞嚥和說話的能力。這些機能會隨著年齡慢慢退化，如果不好好保養，可能影響飲食，進而影響營養吸收。建議您保持良好的口腔衛生，定期清潔牙齒和假牙，並定期到牙醫診所檢查。另外，『口乾症』也是年長者常見的問題，尤其是服用多種藥物時容易發生。唾液分泌少，不僅會讓口腔不舒服，還會增加蛀牙和牙周病的風險。建議多喝水，保持口腔濕潤，必要時可以使用人工唾液或無糖口含片來緩解口乾症狀。最後，如果您佩戴假牙，記得要每天清潔，並且定期檢查假牙的合適度。隨著時間推移，牙齦和骨頭形狀可能會改變，假牙就可能不再合適，影響咀嚼和口腔健康。定期到診所檢查假牙的狀況，保持口腔功能，這樣才能讓您吃得健康、生活更舒適<br>"
    }

    if (teethCount === "0") {
        if (fullDentures === "both") {
            feedbackText += "您有上下顎的全口假牙，請注意假牙與口腔的清潔，定期檢查口腔健康。現在要教你清潔假牙的正確方式：<br>第一個步驟是要使用軟毛牙刷和清水清潔假牙，這邊要注意不可以使用牙膏喔！因為牙膏會磨傷我們的假牙。<br>第二個步驟是要使用假牙清潔錠，每個廠牌的假牙清潔錠不一樣有的泡5分鐘就要拿起來，有的要泡15分鐘，有的可以泡在裡面一整晚，泡到適當的時間時，我們把假牙放到新的一杯清水裡面我們就可以去睡覺了！隔天早上用清水沖一沖你就可以戴上去囉！這樣您學會嗎？<br>";
        } 
        else if (fullDentures === "upper") {
            feedbackText += "您有上顎假牙，請注意假牙與口腔的清潔，並定期檢查口腔健康。現在要教你清潔假牙的正確方式：<br>第一個步驟是要使用軟毛牙刷和清水清潔假牙，這邊要注意不可以使用牙膏喔！因為牙膏會磨傷我們的假牙。<br>第二個步驟是要使用假牙清潔錠，每個廠牌的假牙清潔錠不一樣有的泡5分鐘就要拿起來，有的要泡15分鐘，有的可以泡在裡面一整晚，泡到適當的時間時，我們把假牙放到新的一杯清水裡面我們就可以去睡覺了！隔天早上用清水沖一沖你就可以戴上去囉！這樣您學會嗎？。<br>";
        } 
        else if (fullDentures === "lower") {
            feedbackText += "您有下顎假牙，請注意假牙與口腔的清潔，並定期檢查口腔健康。現在要教你清潔假牙的正確方式：<br>第一個步驟是要使用軟毛牙刷和清水清潔假牙，這邊要注意不可以使用牙膏喔！因為牙膏會磨傷我們的假牙。<br>第二個步驟是要使用假牙清潔錠，每個廠牌的假牙清潔錠不一樣有的泡5分鐘就要拿起來，有的要泡15分鐘，有的可以泡在裡面一整晚，泡到適當的時間時，我們把假牙放到新的一杯清水裡面我們就可以去睡覺了！隔天早上用清水沖一沖你就可以戴上去囉！這樣您學會嗎？。<br>";
        }
        else {
            feedbackText += "您是全口無牙患者，請留意飲食與口腔健康，建議定期檢查。有專業的醫師建議可購買「海綿刷」，每日保持至少2次、每次至少2分鐘的清潔。<br>若高齡長輩無法順利將牙膏泡沫吐出，可在海綿刷沾上白開水，小心擦拭牙齦表面，不但可以確保口腔中不會有過多細菌滋生，也能稍微協助長輩按摩牙齦與牙周，是全口無牙者清潔兼具復健的方式！您可以在家試試看用這樣的方式清潔口腔喔！<br>";
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
        feedbackText += "建議您每次刷牙的時間至少三分鐘，以確保清潔效果。<br>";
    } 
    else if (!brushingDuration) {
        feedbackText += "您尚未選擇刷牙的時長。<br>";
    }
    else {
            feedbackText += "您刷牙的時間長度大於三分鐘，很棒！。<br>";
        }
    
    if (smoking === "是") {
        feedbackText += "抽菸會增加牙齦病變與口腔癌的風險，建議要定期做口腔癌篩檢，國民健康署補助30歲以上（含已戒檳榔）及吸菸民眾及18至未滿30歲嚼檳榔（含已戒檳榔）原住民每兩年一次免費口腔黏膜檢查。<br>";
    }
    if (drinking === "是") {
        feedbackText += "飲酒過量會影響口腔健康，建議適量飲酒並定期檢查。<br>";
    }
    if (betelNut === "是") {
        feedbackText += "嚼檳榔是口腔癌的高風險行為，建議要定期做口腔癌篩檢，國民健康署補助30歲以上（含已戒檳榔）及吸菸民眾及18至未滿30歲嚼檳榔（含已戒檳榔）原住民每兩年一次免費口腔黏膜檢查。<br>";
    }
    if (smoking === "是" || drinking === "是" || betelNut === "是") {
        feedbackText += "若發現您的口腔中有紅色或白色的不明斑點、口腔黏膜破皮超過兩週未癒合、口腔黏膜逐漸變應、口腔黏膜表面有不規則突起、臉部或頸部出現不明腫塊任一項症狀，請儘速就醫，及早發現治療可以進而降低癌症的發生機率及死亡風險。<br>";
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

    if (subbtn == "Yes") {
        // 顯示回饋
        document.getElementById("feedbackText").innerHTML = feedbackText;
        document.getElementById("feedback").style.display = "block";
        alert("提交成功！請往下滑查看表單回饋及使用口腔衛生小助手！");
    } else {
        alert("請先同意隱私權政策再提交！");
    }
    
}
