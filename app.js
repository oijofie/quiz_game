

const quiz = [
    {
        question: "英語で頭は？",
        answers: [
            'leg', 
            'head', 
            'nintendo', 
            'playstation'
        ],
        correct: 'head'
    },{
        question: "aの次は?",
        answers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correct: "b"
    },{
        question: "英語で手は?",
        answers: [
            "hand",
            "head",
            "mute",
            "noise"
        ],
        correct: "hand"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
/*
    長いので省略する。
    htmlのオブジェクトをとって来る場合は、$をいれるのがお約束
*/
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length
//クイズの問題文、選択肢をHTMLに表示
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
}
setupQuiz();

//正誤判定
//eはイベントのオブジェクト。clickをとっている
//targetは今回はクリックされたボタン
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
    }else{
        window.alert('不正解!');
    }    

    quizIndex++;

    if(quizIndex < quizLength){
        //問題があれば
        setupQuiz();
        window
    }else{
        //問題はなければ
        window.alert("終了!あなたの正解数は" + score + '/' + quizLength + 'です');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}