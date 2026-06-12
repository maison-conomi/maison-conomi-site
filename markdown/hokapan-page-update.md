# ほかほかパンダページ更新メモ

## 変更内容

- `hokapan.html` を、白い部屋の中にほかほかパンダと固定素材を配置するレイアウトへ変更
- `css/hokapan.css` を、PC / スマホそれぞれの配置に合わせて作り直し
- PC版は `hokapan-stage` を基準に、床の線・固定素材・パンダ・プロフィール文字を含む有効範囲として配置
- ウィンドウ幅が狭いときも画像や文字が切れないようにし、外側の白い余白を含めにくい比率で表示
- PC版の有効範囲は床の線を基準に詰め、ドア、こうみんかん、世界図、おみせ、つみきの位置を調整
- プロフィール文字はPC版では `15px` を基準に、`hokapan-stage` 内で配置
- Google Fonts に `Yomogi` を追加し、ほかほかパンダページの文字に使用
- `images/hokahokapanda/random/` の画像から、ページ更新ごとに1枚をランダム表示
- ほかほかパンダが部屋の中をゆっくり動くアニメーションを追加
- こうみんかん、ドア、マップはクリックで説明パネルを表示
- おみせは左右の斜線で囲んだ `SHOP!` 表示を付け、外部 shop へ遷移

## 使用画像

- タイトル画像
    - `images/hokahokapanda/hokahokapanda-name.png`
- 固定素材
    - `images/hokahokapanda/fixed/floor-line.png`
    - `images/hokahokapanda/fixed/community-center-entrance.png`
    - `images/hokahokapanda/fixed/door.png`
    - `images/hokahokapanda/fixed/window.png`
    - `images/hokahokapanda/fixed/map-board.png`
    - `images/hokahokapanda/fixed/hokahoka-mart.png`
    - `images/hokahokapanda/fixed/blocks.png`
    - `images/hokahokapanda/fixed/starting-square.png`
- ランダム表示
    - `images/hokahokapanda/random/hokapan-character-01.png` から `hokapan-character-10.png`

## 今後できること

- ほかほかパンダの移動範囲や速度をさらに自然に調整
- 各ボタンの遷移先を専用ページに変更
- こうみんかん、おうち、マップの説明画像を差し替え
- `starting-square.png` を世界図ページとして独立表示
