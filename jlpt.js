// JLPT-style practice for the kanji levels: original sentences, reading texts, notices and dialogues.
// Written for this app (not copied from any book or official test); formats follow the JLPT item types.
// Sentences: kanji|sentence split in 4 parts with /|reading in hiragana|translation
const SEN5 = `一|わたしは/りんごを/一つ/かいました。|わたしはりんごをひとつかいました。|Compré una manzana.
二|きのう/友だちと二人で/えいがを/見ました。|きのうともだちとふたりでえいがをみました。|Ayer vi una película con un amigo (los dos).
三|わたしは/三月に/日本へ/行きます。|わたしはさんがつににほんへいきます。|Voy a Japón en marzo.
四|日本の/学校は/四月に/はじまります。|にほんのがっこうはしがつにはじまります。|En Japón la escuela empieza en abril.
五|たまごを/五つ/かって/ください。|たまごをいつつかってください。|Compra cinco huevos, por favor.
六|わたしは/まいあさ/六時に/おきます。|わたしはまいあさろくじにおきます。|Me levanto a las seis cada mañana.
七|七月は/とても/あつい/です。|しちがつはとてもあついです。|Julio es muy caluroso.
八|八月に/うみへ/行きたい/です。|はちがつにうみへいきたいです。|Quiero ir al mar en agosto.
九|九月に/なると/すずしく/なります。|くがつになるとすずしくなります。|En septiembre se pone fresco.
十|十月の/テストは/むずかしかった/です。|じゅうがつのてすとはむずかしかったです。|El examen de octubre fue difícil.
百|この/パンは/百円で/やすいです。|このぱんはひゃくえんでやすいです。|Este pan cuesta cien yenes, es barato.
千|えきの/前で/千円を/ひろいました。|えきのまえでせんえんをひろいました。|Encontré mil yenes frente a la estación.
万|この/カメラは/一万円/です。|このかめらはいちまんえんです。|Esta cámara cuesta diez mil yenes.
円|この/ジュースは/百円/です。|このじゅーすはひゃくえんです。|Este jugo cuesta cien yenes.
日|毎日/日本語を/べんきょう/します。|まいにちにほんごをべんきょうします。|Estudio japonés todos los días.
月|こんやは/月が/とても/きれいです。|こんやはつきがとてもきれいです。|Esta noche la luna está muy bonita.
火|火曜日に/友だちと/テニスを/します。|かようびにともだちとてにすをします。|El martes juego tenis con un amigo.
水|つめたい/水を/一ぱい/ください。|つめたいみずをいっぱいください。|Un vaso de agua fría, por favor.
木|こうえんに/大きい/木が/あります。|こうえんにおおきいきがあります。|Hay un árbol grande en el parque.
金|お金が/ないので/なにも/かいません。|おかねがないのでなにもかいません。|Como no tengo dinero, no compro nada.
土|土曜日は/いえで/本を/読みます。|どようびはいえでほんをよみます。|El sábado leo libros en casa.
年|来年/日本へ/行きたい/です。|らいねんにほんへいきたいです。|El próximo año quiero ir a Japón.
時|時間が/ないから/はやく/行きましょう。|じかんがないからはやくいきましょう。|No hay tiempo, vamos rápido.
間|えきまで/バスで/一時間/かかります。|えきまでばすでいちじかんかかります。|Se tarda una hora en bus hasta la estación.
午|午後/三時に/友だちに/あいます。|ごごさんじにともだちにあいます。|Veo a un amigo a las tres de la tarde.
今|今日は/とても/さむい/です。|きょうはとてもさむいです。|Hoy hace mucho frío.
毎|毎日/コーヒーを/二はい/のみます。|まいにちこーひーをにはいのみます。|Tomo dos tazas de café cada día.
半|あしたの/えいがは/七時半に/はじまります。|あしたのえいがはしちじはんにはじまります。|La película de mañana empieza a las siete y media.
人|あの/人は/日本人/です。|あのひとはにほんじんです。|Esa persona es japonesa.
男|男の子が/こうえんで/あそんで/います。|おとこのこがこうえんであそんでいます。|Un niño está jugando en el parque.
女|女の子が/ピアノを/ひいて/います。|おんなのこがぴあのをひいています。|Una niña está tocando el piano.
子|子どもたちは/外で/あそぶのが/すきです。|こどもたちはそとであそぶのがすきです。|A los niños les gusta jugar afuera.
父|父は/まいばん/しんぶんを/読みます。|ちちはまいばんしんぶんをよみます。|Mi papá lee el periódico cada noche.
母|母は/りょうりが/とても/上手です。|はははりょうりがとてもじょうずです。|Mi mamá cocina muy bien.
友|友だちと/日本語で/たくさん/話しました。|ともだちとにほんごでたくさんはなしました。|Hablé mucho en japonés con un amigo.
名|あなたの/名前を/ここに/書いてください。|あなたのなまえをここにかいてください。|Escribe tu nombre aquí, por favor.
生|わたしの/先生は/とても/やさしいです。|わたしのせんせいはとてもやさしいです。|Mi profesor es muy amable.
先|先週/友だちと/山へ/行きました。|せんしゅうともだちとやまへいきました。|La semana pasada fui a la montaña con un amigo.
上|つくえの/上に/ねこが/います。|つくえのうえにねこがいます。|Hay un gato sobre el escritorio.
下|いすの/下に/かばんが/あります。|いすのしたにかばんがあります。|Hay un bolso debajo de la silla.
中|かばんの/中に/本が/あります。|かばんのなかにほんがあります。|Hay un libro dentro del bolso.
外|きょうは/雨なので/外で/あそびません。|きょうはあめなのでそとであそびません。|Hoy llueve, así que no jugamos afuera.
右|ぎんこうは/えきの/右に/あります。|ぎんこうはえきのみぎにあります。|El banco está a la derecha de la estación.
左|ゆうびんきょくは/こうえんの/左に/あります。|ゆうびんきょくはこうえんのひだりにあります。|El correo está a la izquierda del parque.
前|えきの/前で/友だちを/まちます。|えきのまえでともだちをまちます。|Espero a mi amigo frente a la estación.
後|じゅぎょうの/後で/としょかんへ/行きます。|じゅぎょうのあとでとしょかんへいきます。|Después de la clase voy a la biblioteca.
東|東京は/人が/とても/おおいです。|とうきょうはひとがとてもおおいです。|En Tokio hay mucha gente.
西|えきの/西口で/三時に/あいましょう。|えきのにしぐちでさんじにあいましょう。|Encontrémonos a las tres en la salida oeste de la estación.
南|南の/国は/ふゆも/あたたかいです。|みなみのくにはふゆもあたたかいです。|En los países del sur hace calor incluso en invierno.
北|北の/ほうは/とても/さむいです。|きたのほうはとてもさむいです。|Hacia el norte hace mucho frío.
山|なつやすみに/ふじ山へ/のぼり/ました。|なつやすみにふじさんへのぼりました。|En las vacaciones de verano subí el monte Fuji.
川|この/川の/水は/きれいです。|このかわのみずはきれいです。|El agua de este río es limpia.
天|あしたの/天気は/雨/でしょう。|あしたのてんきはあめでしょう。|Mañana probablemente lloverá.
気|おばあさんは/いつも/元気/です。|おばあさんはいつもげんきです。|Mi abuela siempre está llena de energía.
雨|雨が/ふっているので/かさを/もって行きます。|あめがふっているのでかさをもっていきます。|Como está lloviendo, llevo paraguas.
電|わたしは/電車で/学校へ/行きます。|わたしはでんしゃでがっこうへいきます。|Voy a la escuela en tren.
車|父の/車は/白くて/大きいです。|ちちのくるまはしろくておおきいです。|El coche de mi papá es blanco y grande.
国|あなたは/どこの/国から/来ましたか。|あなたはどこのくにからきましたか。|¿De qué país vienes?
行|あした/友だちと/かいものに/行きます。|あしたともだちとかいものにいきます。|Mañana voy de compras con un amigo.
来|来年/また/日本へ/来たいです。|らいねんまたにほんへきたいです。|Quiero volver a Japón el próximo año.
出|すみません、/出口は/どこ/ですか。|すみません、でぐちはどこですか。|Disculpe, ¿dónde está la salida?
入|入口で/くつを/ぬいで/ください。|いりぐちでくつをぬいでください。|Quítate los zapatos en la entrada, por favor.
見|日曜日に/えいがを/見に/行きます。|にちようびにえいがをみにいきます。|El domingo voy a ver una película.
聞|まいあさ/ラジオで/ニュースを/聞きます。|まいあさらじおでにゅーすをききます。|Cada mañana escucho las noticias en la radio.
食|きのうの/ひるに/すしを/食べました。|きのうのひるにすしをたべました。|Ayer al mediodía comí sushi.
休|あしたは/学校が/休み/です。|あしたはがっこうがやすみです。|Mañana no hay clases.
学|あには/大学で/日本語を/べんきょうしています。|あにはだいがくでにほんごをべんきょうしています。|Mi hermano mayor estudia japonés en la universidad.
校|学校は/いえから/ちかい/です。|がっこうはいえからちかいです。|La escuela está cerca de casa.
語|わたしは/毎日/日本語を/れんしゅうします。|わたしはまいにちにほんごをれんしゅうします。|Practico japonés todos los días.
読|ねる前に/すこし/本を/読みます。|ねるまえにすこしほんをよみます。|Antes de dormir leo un poco.
書|ノートに/かんじを/書いて/ください。|のーとにかんじをかいてください。|Escribe los kanji en el cuaderno, por favor.
話|よる、/電話で/母と/話しました。|よる、でんわでははとはなしました。|En la noche hablé por teléfono con mi mamá.
本|この本は/とても/おもしろい/です。|このほんはとてもおもしろいです。|Este libro es muy interesante.
何|けさ、/あさごはんに/何を/食べましたか。|けさ、あさごはんになにをたべましたか。|¿Qué desayunaste esta mañana?
大|あの/大きい/たてものは/ぎんこうです。|あのおおきいたてものはぎんこうです。|Ese edificio grande es un banco.
小|小さい/ねこが/いすの上で/ねています。|ちいさいねこがいすのうえでねています。|Un gato pequeño duerme sobre la silla.
高|この/とけいは/とても/高いです。|このとけいはとてもたかいです。|Este reloj es muy caro.
長|母の/かみは/とても/長いです。|ははのかみはとてもながいです。|El pelo de mi mamá es muy largo.
白|白い/ねこが/外に/います。|しろいねこがそとにいます。|Hay un gato blanco afuera.`;

const SEN4 = `力|毎日/れんしゅうして/体力を/つけます。|まいにちれんしゅうしてたいりょくをつけます。|Practico cada día para ganar resistencia.
口|えきの/出口で/友だちを/待ちます。|えきのでぐちでともだちをまちます。|Espero a mi amigo en la salida de la estación.
工|あの/工場では/車を/作っています。|あのこうじょうではくるまをつくっています。|En esa fábrica fabrican coches.
夕|夕方に/なると/すずしく/なります。|ゆうがたになるとすずしくなります。|Al atardecer se pone fresco.
手|ひさしぶりに/母に/手紙を/書きました。|ひさしぶりにははにてがみをかきました。|Escribí una carta a mi mamá después de mucho tiempo.
方|この/かんじの/読み方を/教えてください。|このかんじのよみかたをおしえてください。|Enséñame la lectura de este kanji, por favor.
不|駅から/遠くて/とても/不便です。|えきからとおくてとてもふべんです。|Está lejos de la estación y es muy incómodo.
元|おじいさんは/九十さいですが/とても/元気です。|おじいさんはきゅうじゅっさいですがとてもげんきです。|Mi abuelo tiene noventa años pero está muy bien.
止|雨で/試合が/中止に/なりました。|あめでしあいがちゅうしになりました。|El partido se canceló por la lluvia.
公|日曜日に/公園を/ゆっくり/歩きました。|にちようびにこうえんをゆっくりあるきました。|El domingo caminé tranquilo por el parque.
犬|うちの/犬は/とても/かしこいです。|うちのいぬはとてもかしこいです。|Nuestro perro es muy listo.
牛|毎朝/牛乳を/一ぱい/飲みます。|まいあさぎゅうにゅうをいっぱいのみます。|Cada mañana tomo un vaso de leche.
目|日本へ/来た/目的は/何ですか。|にほんへきたもくてきはなんですか。|¿Cuál es el propósito de venir a Japón?
立|先生が/来たら/立って/ください。|せんせいがきたらたってください。|Cuando venga el profesor, ponte de pie.
用|きょうは/用事が/あるので/早く帰ります。|きょうはようじがあるのではやくかえります。|Hoy tengo un asunto, así que me voy temprano.
田|田中さんは/わたしと/同じ会社で/はたらいています。|たなかさんはわたしとおなじかいしゃではたらいています。|Tanaka trabaja en la misma empresa que yo.
代|子どもの/時代は/いなかに/住んでいました。|こどものじだいはいなかにすんでいました。|De niño vivía en el campo.
正|正しい/こたえを/一つ/えらんでください。|ただしいこたえをひとつえらんでください。|Elige una respuesta correcta.
主|主人は/今/会社に/います。|しゅじんはいまかいしゃにいます。|Mi esposo está en la oficina ahora.
仕|父は/毎日/おそくまで/仕事をしています。|ちちはまいにちおそくまでしごとをしています。|Mi papá trabaja hasta tarde todos los días.
可|あしたは/雨の/可能性が/高いです。|あしたはあめのかのうせいがたかいです。|Mañana hay alta probabilidad de lluvia.
台|台所で/母が/料理を/作っています。|だいどころでははがりょうりをつくっています。|Mi mamá está cocinando en la cocina.
去|去年/はじめて/日本へ/行きました。|きょねんはじめてにほんへいきました。|El año pasado fui a Japón por primera vez.
広|この/公園は/とても/広いです。|このこうえんはとてもひろいです。|Este parque es muy amplio.
写|旅行の/写真を/友だちに/見せました。|りょこうのしゃしんをともだちにみせました。|Le mostré las fotos del viaje a mi amigo.
古|この/お寺は/とても/古いです。|このおてらはとてもふるいです。|Este templo es muy antiguo.
兄|兄は/東京の/大学に/通っています。|あにはとうきょうのだいがくにかよっています。|Mi hermano mayor va a una universidad de Tokio.
冬|冬休みに/家族と/スキーに/行きます。|ふゆやすみにかぞくとすきーにいきます。|En las vacaciones de invierno voy a esquiar con mi familia.
会|あした/駅で/友だちに/会います。|あしたえきでともだちにあいます。|Mañana me encuentro con un amigo en la estación.
自|自分の/へやは/自分で/そうじします。|じぶんのへやはじぶんでそうじします。|Yo mismo limpio mi cuarto.
同|わたしたちは/同じ/クラスの/学生です。|わたしたちはおなじくらすのがくせいです。|Somos estudiantes de la misma clase.
地|地図を/見ながら/町を/歩きました。|ちずをみながらまちをあるきました。|Caminé por la ciudad mirando el mapa.
死|かっていた/金魚が/死んで/しまいました。|かっていたきんぎょがしんでしまいました。|Se murió el pez dorado que tenía.
考|もう/一度/よく/考えてください。|もういちどよくかんがえてください。|Piénsalo bien otra vez.
安|この/店の/やさいは/安いです。|このみせのやさいはやすいです。|Las verduras de esta tienda son baratas.
多|この/町は/山が/多いです。|このまちはやまがおおいです。|Este pueblo tiene muchas montañas.
早|あしたは/早く/起きなければ/なりません。|あしたははやくおきなければなりません。|Mañana tengo que levantarme temprano.
色|どんな/色の/服が/すきですか。|どんないろのふくがすきですか。|¿De qué color te gusta la ropa?
字|この/漢字は/むずかしくて/書けません。|このかんじはむずかしくてかけません。|Este kanji es difícil y no puedo escribirlo.
肉|わたしは/魚より/肉が/すきです。|わたしはさかなよりにくがすきです。|Me gusta más la carne que el pescado.
言|先生の/言葉を/ノートに/書きました。|せんせいのことばをのーとにかきました。|Escribí las palabras del profesor en el cuaderno.
体|毎朝/走って/体を/強くしています。|まいあさはしってからだをつよくしています。|Cada mañana corro para fortalecer el cuerpo.
作|姉は/ケーキを/作るのが/上手です。|あねはけーきをつくるのがじょうずです。|Mi hermana mayor hace pasteles muy bien.
私|私は/スペイン語と/日本語を/話します。|わたしはすぺいんごとにほんごをはなします。|Hablo español y japonés.
社|兄は/大きい/会社で/はたらいています。|あにはおおきいかいしゃではたらいています。|Mi hermano mayor trabaja en una empresa grande.
別|きょうは/わたしにとって/特別な/日です。|きょうはわたしにとってとくべつなひです。|Hoy es un día especial para mí.
近|家の/近くに/コンビニが/あります。|いえのちかくにこんびにがあります。|Hay una tienda de conveniencia cerca de casa.
身|田中さんは/京都の/出身/です。|たなかさんはきょうとのしゅっしんです。|Tanaka es de Kioto.
足|たくさん/歩いて/足が/いたいです。|たくさんあるいてあしがいたいです。|Caminé mucho y me duelen los pies.
売|駅の/売店で/新聞を/買いました。|えきのばいてんでしんぶんをかいました。|Compré el periódico en el quiosco de la estación.
住|わたしは/東京に/住んで/います。|わたしはとうきょうにすんでいます。|Vivo en Tokio.
医|ねつが/あるので/医者に/行きます。|ねつがあるのでいしゃにいきます。|Tengo fiebre, así que voy al médico.
花|春に/公園で/友だちと/花見をしました。|はるにこうえんでともだちとはなみをしました。|En primavera fui a ver los cerezos al parque con amigos.
赤|赤ちゃんが/しずかに/ねて/います。|あかちゃんがしずかにねています。|El bebé está durmiendo tranquilo.
町|この/町は/小さいですが/きれいです。|このまちはちいさいですがきれいです。|Este pueblo es pequeño pero bonito.
走|毎朝/公園を/三十分/走ります。|まいあさこうえんをさんじゅっぷんはしります。|Cada mañana corro treinta minutos en el parque.
究|兄は/大学で/れきしを/研究しています。|あにはだいがくでれきしをけんきゅうしています。|Mi hermano investiga historia en la universidad.
図|図書館で/しずかに/本を/読みます。|としょかんでしずかにほんをよみます。|Leo libros en silencio en la biblioteca.
弟|弟は/まだ/小学生/です。|おとうとはまだしょうがくせいです。|Mi hermano menor todavía va a la primaria.
事|父の/仕事は/医者/です。|ちちのしごとはいしゃです。|Mi papá trabaja de médico.
者|わかい/医者が/やさしく/せつめいしてくれました。|わかいいしゃがやさしくせつめいしてくれました。|Un médico joven me lo explicó con amabilidad.
明|この/へやは/明るくて/きもちがいいです。|このへやはあかるくてきもちがいいです。|Este cuarto es luminoso y agradable.
知|その/ニュースを/知って/いますか。|そのにゅーすをしっていますか。|¿Sabes esa noticia?
物|週末に/デパートで/買い物を/しました。|しゅうまつにでぱーとでかいものをしました。|El fin de semana fui de compras a los grandes almacenes.
的|日本へ/行く/目的は/何ですか。|にほんへいくもくてきはなんですか。|¿Cuál es el objetivo de ir a Japón?
使|この/パソコンを/使っても/いいですか。|このぱそこんをつかってもいいですか。|¿Puedo usar esta computadora?
始|日本語の/じゅぎょうは/九時に/始まります。|にほんごのじゅぎょうはくじにはじまります。|La clase de japonés empieza a las nueve.
画|週末は/友だちと/映画を/見ます。|しゅうまつはともだちとえいがをみます。|El fin de semana veo películas con amigos.
味|この/ことばの/意味が/わかりません。|このことばのいみがわかりません。|No entiendo el significado de esta palabra.
空|きょうは/空が/青くて/きれいです。|きょうはそらがあおくてきれいです。|Hoy el cielo está azul y bonito.
夜|きのうは/夜/おそくまで/勉強しました。|きのうはよるおそくまでべんきょうしました。|Ayer estudié hasta tarde en la noche.
店|あの/店の/ラーメンは/おいしいです。|あのみせのらーめんはおいしいです。|El ramen de esa tienda es delicioso.
歩|駅まで/歩いて/十分/かかります。|えきまであるいてじゅっぷんかかります。|Se tardan diez minutos a pie hasta la estación.
注|道を/わたる/ときは/注意してください。|みちをわたるときはちゅういしてください。|Ten cuidado al cruzar la calle.
京|京都には/古い/お寺が/たくさんあります。|きょうとにはふるいおてらがたくさんあります。|En Kioto hay muchos templos antiguos.
英|姉は/英語を/話すのが/上手です。|あねはえいごをはなすのがじょうずです。|Mi hermana mayor habla bien inglés.
服|あたらしい/服を/買いに/行きます。|あたらしいふくをかいにいきます。|Voy a comprar ropa nueva.
青|青い/シャツを/きている人が/田中さんです。|あおいしゃつをきているひとがたなかさんです。|La persona con camisa azul es Tanaka.
姉|姉は/銀行で/はたらいて/います。|あねはぎんこうではたらいています。|Mi hermana mayor trabaja en un banco.
妹|妹は/ピアノを/ならって/います。|いもうとはぴあのをならっています。|Mi hermana menor aprende piano.
思|日本語の/勉強は/おもしろいと/思います。|にほんごのべんきょうはおもしろいとおもいます。|Creo que estudiar japonés es interesante.
持|雨なので/かさを/持って/行きます。|あめなのでかさをもっていきます。|Como llueve, llevo paraguas.
発|電車は/八時に/東京駅を/出発します。|でんしゃははちじにとうきょうえきをしゅっぱつします。|El tren sale de la estación de Tokio a las ocho.
度|今度の/休みに/京都へ/行きます。|こんどのやすみにきょうとへいきます。|En las próximas vacaciones voy a Kioto.
界|いつか/世界中を/旅行/したいです。|いつかせかいじゅうをりょこうしたいです。|Algún día quiero viajar por todo el mundo.
待|駅の/前で/三十分/待ちました。|えきのまえでさんじゅっぷんまちました。|Esperé treinta minutos frente a la estación.
音|毎日/音楽を/聞きながら/勉強します。|まいにちおんがくをききながらべんきょうします。|Cada día estudio escuchando música.
海|夏休みに/家族と/海へ/行きました。|なつやすみにかぞくとうみへいきました。|En las vacaciones de verano fui al mar con mi familia.
重|この/かばんは/とても/重いです。|このかばんはとてもおもいです。|Este bolso es muy pesado.
急|時間が/ないので/急いで/ください。|じかんがないのでいそいでください。|No hay tiempo, date prisa.
品|この/店は/品物が/多いです。|このみせはしなものがおおいです。|Esta tienda tiene muchos productos.
計|たんじょうびに/新しい/時計を/もらいました。|たんじょうびにあたらしいとけいをもらいました。|Me regalaron un reloj nuevo en mi cumpleaños.
送|国の/両親に/写真を/送りました。|くにのりょうしんにしゃしんをおくりました。|Envié fotos a mis padres en mi país.
映|今夜/友だちと/映画を/見に行きます。|こんやともだちとえいがをみにいきます。|Esta noche voy a ver una película con un amigo.
屋|駅の/近くに/本屋が/あります。|えきのちかくにほんやがあります。|Hay una librería cerca de la estación.
室|学生たちは/教室で/先生を/待っています。|がくせいたちはきょうしつでせんせいをまっています。|Los estudiantes esperan al profesor en el salón.
風|風邪を/ひいて/学校を/休みました。|かぜをひいてがっこうをやすみました。|Me resfrié y falté a la escuela.
建|駅の前に/大きい/建物が/あります。|えきのまえにおおきいたてものがあります。|Hay un edificio grande frente a la estación.
研|夏に/会社の/研修が/あります。|なつにかいしゃのけんしゅうがあります。|En verano hay una capacitación en la empresa.
春|春に/なると/さくらが/さきます。|はるになるとさくらがさきます。|Cuando llega la primavera, florecen los cerezos.
秋|秋は/すずしくて/いちばん/すきです。|あきはすずしくていちばんすきです。|El otoño es fresco y es lo que más me gusta.
茶|毎朝/あたたかい/お茶を/飲みます。|まいあさあたたかいおちゃをのみます。|Cada mañana tomo té caliente.
洋|きょうは/洋服を/買いに/行きました。|きょうはようふくをかいにいきました。|Hoy fui a comprar ropa.
昼|きょうの/昼ご飯は/何を/食べましたか。|きょうのひるごはんはなにをたべましたか。|¿Qué almorzaste hoy?
家|日曜日は/家族と/家で/すごします。|にちようびはかぞくといえですごします。|El domingo lo paso en casa con mi familia.
通|この道は/車が/たくさん/通ります。|このみちはくるまがたくさんとおります。|Por esta calle pasan muchos coches.
員|あの/店員は/とても/しんせつです。|あのてんいんはとてもしんせつです。|Ese dependiente es muy amable.
真|家族の/写真を/かべに/はりました。|かぞくのしゃしんをかべにはりました。|Pegué la foto de mi familia en la pared.
帰|毎日/六時に/家に/帰ります。|まいにちろくじにいえにかえります。|Vuelvo a casa a las seis todos los días.
起|わたしは/毎朝/七時に/起きます。|わたしはまいあさしちじにおきます。|Me levanto a las siete cada mañana.
料|母の/料理は/とても/おいしいです。|ははのりょうりはとてもおいしいです。|La comida de mi mamá es muy rica.
特|特急に/乗れば/一時間で/着きます。|とっきゅうにのればいちじかんでつきます。|Si tomas el expreso, llegas en una hora.
院|おばあさんは/今/病院に/います。|おばあさんはいまびょういんにいます。|Mi abuela está en el hospital ahora.
旅|来月/友だちと/旅行に/行きます。|らいげつともだちとりょこうにいきます。|El próximo mes voy de viaje con amigos.
夏|夏休みに/毎日/海で/およぎました。|なつやすみにまいにちうみでおよぎました。|En las vacaciones de verano nadé en el mar todos los días.
借|図書館で/本を/三さつ/借りました。|としょかんでほんをさんさつかりました。|Saqué tres libros de la biblioteca.
勉|毎晩/一時間/日本語を/勉強します。|まいばんいちじかんにほんごをべんきょうします。|Cada noche estudio japonés una hora.
理|この/問題は/むずかしくて/無理です。|このもんだいはむずかしくてむりです。|Este problema es tan difícil que es imposible.
動|日曜日に/動物園で/パンダを/見ました。|にちようびにどうぶつえんでぱんだをみました。|El domingo vi pandas en el zoológico.
問|わからない時は/先生に/質問して/ください。|わからないときはせんせいにしつもんしてください。|Cuando no entiendas, pregúntale al profesor.
強|あしたは/雨で/風も/強いでしょう。|あしたはあめでかぜもつよいでしょう。|Mañana lloverá y el viento también será fuerte.
教|姉は/中学校で/英語を/教えています。|あねはちゅうがっこうでえいごをおしえています。|Mi hermana mayor enseña inglés en una secundaria.
終|仕事が/終わったら/電話/します。|しごとがおわったらでんわします。|Te llamo cuando termine el trabajo.
悪|天気が/悪いので/きょうは/家にいます。|てんきがわるいのできょうはいえにいます。|Como hace mal tiempo, hoy me quedo en casa.
族|わたしの/家族は/四人/です。|わたしのかぞくはよにんです。|Mi familia somos cuatro.
転|父は/毎日/車を/運転します。|ちちはまいにちくるまをうんてんします。|Mi papá maneja el coche todos los días.
週|今週の/土曜日に/テストが/あります。|こんしゅうのどようびにてすとがあります。|Este sábado hay un examen.
黒|黒い/ねこが/まどの近くに/います。|くろいねこがまどのちかくにいます。|Hay un gato negro cerca de la ventana.
習|毎週/ピアノを/習って/います。|まいしゅうぴあのをならっています。|Aprendo piano cada semana.
堂|昼は/学校の/食堂で/食べます。|ひるはがっこうのしょくどうでたべます。|Al mediodía como en el comedor de la escuela.
鳥|朝/小鳥の/こえで/起きました。|あさことりのこえでおきました。|En la mañana me desperté con el canto de los pajaritos.
魚|この川には/魚が/たくさん/います。|このかわにはさかながたくさんいます。|En este río hay muchos peces.
場|すみません、/駅の/場所が/わかりません。|すみません、えきのばしょがわかりません。|Disculpe, no sé dónde está la estación.
開|あついので/まどを/開けても/いいですか。|あついのでまどをあけてもいいですか。|Hace calor, ¿puedo abrir la ventana?
無|この/はくぶつかんは/無料/です。|このはくぶつかんはむりょうです。|Este museo es gratis.
道|道が/わからないので/地図を/見ます。|みちがわからないのでちずをみます。|No conozco el camino, así que miro el mapa.
着|駅に/着いたら/電話して/ください。|えきについたらでんわしてください。|Llámame cuando llegues a la estación.
運|週末は/公園で/運動を/します。|しゅうまつはこうえんでうんどうをします。|El fin de semana hago ejercicio en el parque.
集|駅の/前に/人が/集まっています。|えきのまえにひとがあつまっています。|Se está juntando gente frente a la estación.
朝|朝ご飯を/食べてから/学校へ/行きます。|あさごはんをたべてからがっこうへいきます。|Después de desayunar voy a la escuela.
買|きのう/スーパーで/やさいを/買いました。|きのうすーぱーでやさいをかいました。|Ayer compré verduras en el supermercado.
飲|のどが/かわいたので/水を/飲みます。|のどがかわいたのでみずをのみます。|Tengo sed, así que bebo agua.
飯|ご飯を/食べてから/くすりを/飲みます。|ごはんをたべてからくすりをのみます。|Tomo la medicina después de comer.
貸|友だちに/かさを/貸して/あげました。|ともだちにかさをかしてあげました。|Le presté el paraguas a un amigo.
意|道を/わたる時は/車に/注意してください。|みちをわたるときはくるまにちゅういしてください。|Al cruzar la calle, ten cuidado con los coches.
新|きのう/デパートで/新しい/くつを買いました。|きのうでぱーとであたらしいくつをかいました。|Ayer compré zapatos nuevos en los grandes almacenes.
業|毎朝/九時から/授業が/始まります。|まいあさくじからじゅぎょうがはじまります。|Cada mañana las clases empiezan a las nueve.
楽|日本の/旅行は/とても/楽しかったです。|にほんのりょこうはとてもたのしかったです。|El viaje a Japón fue muy divertido.
漢|毎日/漢字を/五つ/おぼえます。|まいにちかんじをいつつおぼえます。|Cada día memorizo cinco kanji.
銀|銀行は/午後/三時に/しまります。|ぎんこうはごごさんじにしまります。|El banco cierra a las tres de la tarde.
駅|駅の/前で/バスを/待ちます。|えきのまえでばすをまちます。|Espero el bus frente a la estación.
質|すみません、/先生に/質問しても/いいですか。|すみません、せんせいにしつもんしてもいいですか。|Disculpe, ¿puedo hacerle una pregunta al profesor?
親|夏休みに/両親と/国へ/帰ります。|なつやすみにりょうしんとくにへかえります。|En las vacaciones de verano vuelvo a mi país con mis padres.
館|図書館は/日曜日も/開いて/います。|としょかんはにちようびもあいています。|La biblioteca también abre los domingos.
題|きょうは/宿題が/たくさん/あります。|きょうはしゅくだいがたくさんあります。|Hoy tengo mucha tarea.
験|来週/日本語の/試験が/あります。|らいしゅうにほんごのしけんがあります。|La próxima semana tengo un examen de japonés.
曜|日曜日は/いつも/家で/休みます。|にちようびはいつもいえでやすみます。|El domingo siempre descanso en casa.
心|あしたの/試験が/心配/です。|あしたのしけんがしんぱいです。|Me preocupa el examen de mañana.
少|わたしは/日本語が/少し/わかります。|わたしはにほんごがすこしわかります。|Entiendo un poco de japonés.
切|家族は/わたしにとって/とても/大切です。|かぞくはわたしにとってとてもたいせつです。|Mi familia es muy importante para mí.
文|きのう/日本語で/作文を/書きました。|きのうにほんごでさくぶんをかきました。|Ayer escribí una redacción en japonés.
以|このテストは/六十点/以上で/ごうかくです。|このてすとはろくじゅってんいじょうでごうかくです。|En este examen se aprueba con sesenta puntos o más.
世|子どもの/世話を/するのは/たいへんです。|こどものせわをするのはたいへんです。|Cuidar a los niños es difícil.
有|この/店は/ラーメンで/有名です。|このみせはらーめんでゆうめいです。|Esta tienda es famosa por su ramen.
紙|国の/友だちに/手紙を/書きます。|くにのともだちにてがみをかきます。|Escribo una carta a un amigo de mi país.
病|病気で/学校を/三日/休みました。|びょうきでがっこうをみっかやすみました。|Falté tres días a la escuela por enfermedad.
野|毎日/野菜を/たくさん/食べます。|まいにちやさいをたくさんたべます。|Como muchas verduras todos los días.
答|先生の/質問に/日本語で/答えました。|せんせいのしつもんににほんごでこたえました。|Respondí la pregunta del profesor en japonés.
試|あしたは/サッカーの/試合が/あります。|あしたはさっかーのしあいがあります。|Mañana hay un partido de fútbol.
歌|カラオケで/日本の/歌を/歌いました。|からおけでにほんのうたをうたいました。|Canté canciones japonesas en el karaoke.`;

// Reading (読解) and notices (情報検索): text, then questions as [question, right, wrong, wrong, wrong]
const READ = {
n5: [
 {kind: 'Texto', t: 'わたしは毎日七時におきます。あさごはんを食べてから、電車で学校へ行きます。学校は九時からです。', q: [['¿Cómo va a la escuela?', 'En tren', 'En bus', 'Caminando', 'En coche'], ['¿A qué hora empiezan las clases?', 'A las nueve', 'A las siete', 'A las ocho', 'A las diez']]},
 {kind: 'Texto', t: 'きのうは日曜日でした。友だちと山へ行きました。天気がよくて、たのしかったです。かえりに、えきの前でラーメンを食べました。', q: [['¿Qué hizo ayer?', 'Fue a la montaña con un amigo', 'Fue al mar', 'Estudió en casa', 'Fue al cine'], ['¿Dónde comieron ramen?', 'Frente a la estación', 'En la montaña', 'En casa', 'En la escuela']]},
 {kind: 'Texto', t: 'わたしの父は先生です。母は本やではたらいています。兄は大学生で、東京にすんでいます。', q: [['¿En qué trabaja el papá?', 'Es profesor', 'Es médico', 'Trabaja en una librería', 'Es estudiante'], ['¿Dónde vive el hermano mayor?', 'En Tokio', 'Con sus padres', 'En Kioto', 'No se dice']]},
 {kind: 'Aviso', t: '【としょかん】\n火〜金　9:00〜20:00\n土・日　10:00〜17:00\n月曜日は 休みです。', q: [['¿Qué día cierra la biblioteca?', 'El lunes', 'El domingo', 'El sábado', 'Nunca'], ['El sábado, ¿hasta qué hora abre?', 'Hasta las 17:00', 'Hasta las 20:00', 'Hasta las 10:00', 'Todo el día']]},
 {kind: 'Aviso', t: '【メニュー】\nラーメン　800円\nカレー　700円\nすし　1200円\nお茶　100円', q: [['Tienes 800 yenes y quieres comer algo y tomar té. ¿Qué pides?', 'Curry y té', 'Ramen y té', 'Sushi', 'Ramen y sushi']]}
],
n4: [
 {kind: 'Texto', t: '先週の土曜日、友だちと京都へ旅行に行きました。古いお寺をたくさん見て、写真をとりました。夜は旅館にとまって、日本の料理を食べました。とても楽しい旅行でした。', q: [['¿Dónde durmieron?', 'En un ryokan (posada japonesa)', 'En casa de un amigo', 'En un hotel moderno', 'En el tren'], ['¿Qué hicieron en Kioto?', 'Vieron templos y sacaron fotos', 'Fueron de compras', 'Estudiaron japonés', 'Fueron a la playa']]},
 {kind: 'Texto', t: 'わたしは毎朝六時に起きて、公園を三十分走ります。それから、シャワーをあびて、朝ご飯を食べます。会社は九時からですが、八時半に着くように家を出ます。', q: [['¿Qué hace después de correr?', 'Se ducha y desayuna', 'Va directo a la empresa', 'Vuelve a dormir', 'Lee el periódico'], ['¿A qué hora quiere llegar a la empresa?', 'A las ocho y media', 'A las nueve', 'A las seis', 'A las siete']]},
 {kind: 'Texto', t: '来週の月曜日に日本語の試験があります。わたしは漢字がにがてなので、毎晩一時間勉強しています。先生は「毎日少しずつ勉強することが大切です」と言いました。', q: [['¿Qué le cuesta más?', 'Los kanji', 'La gramática', 'Escuchar', 'Hablar'], ['¿Qué dijo el profesor?', 'Que es importante estudiar un poco cada día', 'Que estudie toda la noche', 'Que no estudie kanji', 'Que el examen es fácil']]},
 {kind: 'Aviso', t: '【おしらせ】\n図書館は 8月10日(土)から 8月16日(金)まで 休みです。\n本を返す人は、入口の右にある箱に入れてください。', q: [['¿Qué hay que hacer para devolver un libro esos días?', 'Ponerlo en la caja a la derecha de la entrada', 'Esperar hasta el día 17', 'Llevarlo a la recepción', 'Enviarlo por correo'], ['¿Cuántos días cierra la biblioteca?', '7 días', '10 días', '16 días', '3 días']]},
 {kind: 'Aviso', t: '【電車の時間】東京駅 → 京都駅\n特急　9:00 → 11:15\n急行　9:20 → 12:40\n普通　9:30 → 14:00', q: [['Quieres llegar a Kioto antes de las 12:00. ¿Qué tren tomas?', 'El 特急 (expreso limitado) de las 9:00', 'El 急行 (rápido) de las 9:20', 'El 普通 (normal) de las 9:30', 'Cualquiera llega a tiempo']]}
]};

// Listening (聴解): a short conversation read aloud, then one question
const DLG = {
n5: [
 {l: [['F', 'すみません、えきは どこですか。'], ['M', 'まっすぐ 行って、二つ目の かどを 右です。'], ['F', 'ありがとうございます。']], q: ['¿Cómo se llega a la estación?', 'Recto y a la derecha en la segunda esquina', 'A la izquierda en la primera esquina', 'Detrás del parque', 'El hombre no lo sabe']},
 {l: [['M', 'あした、いっしょに えいがを 見ませんか。'], ['F', 'いいですね。何時に しますか。'], ['M', '三時は どうですか。'], ['F', '三時は ちょっと…。五時は どうですか。'], ['M', 'いいですよ。']], q: ['¿A qué hora verán la película?', 'A las cinco', 'A las tres', 'Mañana en la mañana', 'No van a ir']},
 {l: [['F', 'いらっしゃいませ。'], ['M', 'この りんごは いくらですか。'], ['F', '一つ 百円です。'], ['M', 'じゃあ、三つ ください。']], q: ['¿Cuánto paga en total?', '300 yenes', '100 yenes', '30 yenes', '1000 yenes']},
 {l: [['M', 'きのうは 何を しましたか。'], ['F', '友だちと テニスを しました。'], ['M', '天気は どうでしたか。'], ['F', '雨でしたから、ちょっと たいへんでした。']], q: ['¿Qué tiempo hizo ayer?', 'Llovió', 'Hizo sol', 'Nevó', 'Hizo mucho calor']}
],
n4: [
 {l: [['M', 'すみません、この近くに 銀行は ありますか。'], ['F', 'ええ、駅の 前に ありますよ。でも、きょうは 日曜日だから 休みですね。'], ['M', 'そうですか。じゃあ、コンビニの ATMを 使います。']], q: ['¿Qué va a hacer el hombre?', 'Usar el cajero de una tienda de conveniencia', 'Ir al banco', 'Volver mañana', 'Ir a la estación']},
 {l: [['F', '田中さん、あしたの かいぎは 何時からですか。'], ['M', '十時からです。でも、その前に しりょうを コピーしなければ なりません。'], ['F', 'じゃあ、九時に 会社に 来てください。']], q: ['¿A qué hora tiene que llegar Tanaka a la empresa?', 'A las nueve', 'A las diez', 'A las once', 'A las ocho']},
 {l: [['M', '週末は どこかへ 行きましたか。'], ['F', 'ええ、家族と 海へ 行きました。でも、風が 強くて、およげませんでした。'], ['M', 'それは ざんねんでしたね。']], q: ['¿Por qué no pudo nadar?', 'Porque el viento era muy fuerte', 'Porque llovió', 'Porque el agua estaba fría', 'Porque la playa estaba cerrada']},
 {l: [['F', '先生、レポートは いつまでに 出せば いいですか。'], ['M', '来週の 金曜日までに 出して ください。'], ['F', 'わかりました。']], q: ['¿Para cuándo es el informe?', 'Para el viernes de la próxima semana', 'Para mañana', 'Para este viernes', 'Para el lunes']}
]};
