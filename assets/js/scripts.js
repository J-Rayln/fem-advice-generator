/**
 * fem-advice-generator - A Frontened Mentor challenge
 * @version v1.0.0
 * @license ISC
 */
const adviceID=document.querySelector("#adviceID"),adviceResults=document.querySelector("#adviceResults"),button=document.querySelector("#get-data");function getAdvice(){fetch("https://api.adviceslip.com/advice").then((e=>e.json())).then((e=>{const t=e.slip;adviceID.innerHTML=`${t.id}`,adviceResults.innerHTML=`${t.advice}`})).catch((e=>{console.log(e)}))}button.addEventListener("click",(()=>{getAdvice()})),window.onload=()=>{getAdvice()};
//# sourceMappingURL=scripts.js.map