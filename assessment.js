(function(){
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり除去
            element.removeChild(element.firstChild);
        }
    }

      assessmentButton.onclick = () => {
      const userName = userNameInput.value;
      if (userName.length === 0) { //名前が空の時は処理を終了
        return;
      }
      console.log(userName);
      //TODO 診断結果表示エリアの作成

      userNameInput.onkeydown = (event) => {
        if (event.keyCode === 13) {
          assessmentButton.onclick();
            // TODO ボタンのonclick() 処理を呼び出す
        }
    };

    // 診断結果表示エリアの作成
      removeAllChildren(resultDivided);
      const header = document.createElement('h3');
      header.innerText = '診断結果';
      resultDivided.appendChild(header);

      const paragraph = document.createElement('p');
      const result = assessment(userName);
      paragraph.innerText = result;
      resultDivided.appendChild(paragraph);

      //TODO ツイートエリア作成
      removeAllChildren(tweetDivided);
      const anchor = document.createElement('a');
      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text='
      + encodeURIComponent(result);
      anchor.setAttribute('href', hrefValue);
      anchor.className = 'twitter-hashtag-button';
      anchor.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
      tweetDivided.appendChild(anchor);

      twttr.widgets.load();

    };
    const answers = [
            '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を押さえられる{userName}が皆から評価されています。',
        '{userName}のいいところはありません！。他人の迷惑にならないように努力しましょ。'
        '{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振舞に多くの人が癒やされています。'
    ];
     /**
    * 名前の文字列を渡すと診断結果を返す関数
    * @param {string} userName ユーザーの名前
    * @return {string} 診断結果
    */
    function assessment(userName) {
          // 全文字のコード番号を取得してそれを足し合わせる
          let sum0fcherCode = 0;
          for (let i = 0; i < userName.length; i++) {
              sum0fcherCode = sum0fcherCode + userName.charCodeAt(i);
            }
            // 文字のコード番号の合計を回答の数で割って添字の数値を求める
            const index = sum0fcherCode % answers.length;
            let result = answers[index];
        //TODO{useName}をユーザー名に置き換え

        result = result.replace(/\{userName\}/g, userName);
        console.log(userName);
        return result;
    }

    /* テストコード
    console.assert(
        assessment('太郎') === '太郎のいいところはユニークさです。太郎だけのその特徴が皆を楽しくさせます。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
    */
})();
