const scenes = [
  {
    text: "……暗い。\n鼓膜の奥で、遠く水の滴る音がする。\nまるで、世界が終わったあとの静けさだ。\n\n目を開けると、そこは森だった。\nどこまでも同じ景色が続き、どこへ行っても同じ木々の匂い。\n「誰だ……俺は……？」",
    bg: "assets/images/forest.jpg",
    choices: [
      { text: "誰かを探そう", next: 1 },
      { text: "このまま座り込む", next: 2 }
    ]
  },
  {
    text: "「……やっと見つけた」\n声の方を向くと、少女がいた。\n薄青い瞳。どこか人間離れした雰囲気。\n\nミナ「ようこそ、泡沫の庭へ。ここは忘れられた記憶の墓場よ」",
    bg: "assets/images/forest.jpg",
    choices: [
      { text: "俺のことを知ってるのか？", next: 3 },
      { text: "ふざけるな", next: 4 }
    ]
  },
  {
    text: "座り込んだまま目を閉じる。\nその瞬間、すべてが溶けて消えた。\n\nミナ「……哀れな人」",
    bg: "assets/images/black.jpg",
    choices: []
  },
  {
    text: "ミナ「記憶を取り戻したい？」\nその言葉に、胸の奥がざわつく。\nそのとき、黒衣の男が現れる。\n\nクロウ「記憶なんて、なければ楽だ」",
    bg: "assets/images/garden.jpg",
    choices: [
      { text: "記憶を取り戻したい", next: 5 },
      { text: "忘れたままでいい", next: 6 }
    ]
  },
  {
    text: "無言でその場を去ると、老人が現れる。\n\n老人「お前は、己の終わり方すら選べぬのか」",
    bg: "assets/images/forest.jpg",
    choices: [
      { text: "ここを去る", next: 7 },
      { text: "誰かを探す", next: 3 }
    ]
  },
  {
    text: "記憶の断片が蘇る。\nミナはかつての恋人だった。\nこの世界は、彼女を救うために作った仮想の箱庭。\n\nミナ「ありがとう。もういいの」\nミナが微笑み、光に包まれる。",
    bg: "assets/images/lake.jpg",
    choices: []
  },
  {
    text: "記憶を失ったまま、泡沫の庭に取り込まれ、存在が消える。",
    bg: "assets/images/black.jpg",
    choices: []
  },
  {
    text: "世界から消え、誰にも知られず森の虚無に還る。",
    bg: "assets/images/black.jpg",
    choices: []
  }
];
let currentScene = 0;
function showScene(index) {
  const scene = scenes[index];
  document.getElementById("text").textContent = scene.text;
  document.getElementById("bg").style.backgroundImage = `url(${scene.bg})`;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesDiv.appendChild(btn);
  });
}
showScene(currentScene);
