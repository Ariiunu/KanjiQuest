// Datos: kanji N4 (D y raw), N5 (raw5), kana (rawKana) y radicales (RAD4, RAD5).
// Formato de cada línea: kanji|trazos|on|kun|significado|inglés|palabra lectura significado;...|mnemotecnia
const D=[
['心',4,'シン','こころ','corazón','heart','安心 あんしん tranquilidad|心配 しんぱい preocupación','Un corazón con latidos a los lados'],
['少',4,'ショウ','すく-ない / すこ-し','poco','few, little','少し すこし un-poco|少年 しょうねん muchacho','Un 小 (pequeño) al que le quitaron algo'],
['切',4,'セツ','き-る','cortar','cut','切る きる cortar|大切 たいせつ importante','七 + 刀: siete cortes con un cuchillo'],
['文',4,'ブン','ふみ','texto, escritura','sentence, writing','作文 さくぶん redacción|文化 ぶんか cultura','Una persona con los brazos cruzados escribiendo'],
['以',5,'イ','—','mediante, desde','by means of','以上 いじょう más-de|以外 いがい excepto','Una persona 人 usando una herramienta'],
['世',5,'セ・セイ','よ','mundo, era','world, generation','世界 せかい mundo|世話 せわ cuidado','Tres décadas 十 juntas = una generación'],
['写',5,'シャ','うつ-す','copiar, fotografiar','copy, photograph','写真 しゃしん foto|写す うつす copiar','Una cubierta con un objeto debajo: lo copias'],
['有',6,'ユウ','あ-る','tener, existir','have, exist','有名 ゆうめい famoso|有る ある existir','Una mano sosteniendo carne 月: lo tengo'],
['考',6,'コウ','かんが-える','pensar','think','考える かんがえる pensar|参考 さんこう referencia','Un anciano 耂 con bastón, pensando'],
['地',6,'チ・ジ','—','tierra, suelo','ground, earth','地図 ちず mapa|地下鉄 ちかてつ metro','Tierra 土 + serpiente 也 en el suelo'],
['同',6,'ドウ','おな-じ','igual','same','同じ おなじ igual|同時 どうじ al-mismo-tiempo','Una boca 口 dentro de un marco: todos iguales'],
['住',7,'ジュウ','す-む','vivir, residir','live, reside','住む すむ vivir|住所 じゅうしょ dirección','Persona 亻 + dueño 主: vive en su casa'],
['医',7,'イ','—','medicina','medicine','医者 いしゃ médico|医学 いがく medicina','Una caja con una flecha 矢: el botiquín'],
['屋',9,'オク','や','tienda, techo','shop, roof','本屋 ほんや librería|部屋 へや habitación','Un cuerpo 尸 con un 至 que llega: el techo'],
['持',9,'ジ','も-つ','tener, sostener','hold','持つ もつ sostener|気持ち きもち sentimiento','Mano 扌 + templo 寺: la mano que sostiene'],
['風',9,'フウ','かぜ','viento','wind','風邪 かぜ resfriado|台風 たいふう tifón','Una vela 几 inflada con un insecto 虫 dentro'],
['発',9,'ハツ','—','partir, emitir','depart, emit','出発 しゅっぱつ salida|発音 はつおん pronunciación','Pies 癶 arrancando: salir disparado'],
['急',9,'キュウ','いそ-ぐ','apurarse','hurry','急ぐ いそぐ apurarse|特急 とっきゅう expreso','Atrapar 刍 con el corazón 心 acelerado'],
['紙',10,'シ','かみ','papel','paper','紙 かみ papel|手紙 てがみ carta','Hilo 糸 + familia 氏: fibras que forman papel'],
['病',10,'ビョウ','や-む','enfermedad','illness','病気 びょうき enfermedad|病院 びょういん hospital','Cama con fiebre 疒 + 丙: estar enfermo'],
['野',11,'ヤ','の','campo, llanura','field, plain','野菜 やさい verdura|野球 やきゅう béisbol','Aldea 里 + yo 予: el campo abierto'],
['運',12,'ウン','はこ-ぶ','transportar, suerte','carry, luck','運動 うんどう ejercicio|運転 うんてん conducir','Camino ⻌ + ejército 軍: mover tropas'],
['場',12,'ジョウ','ば','lugar','place','場所 ばしょ lugar|工場 こうじょう fábrica','Tierra 土 + sol naciente 昜: un lugar abierto'],
['答',12,'トウ','こた-える','responder','answer','答える こたえる responder|返答 へんとう respuesta','Bambú 竹 + unir 合: encajar la respuesta'],
['試',13,'シ','こころ-みる / ため-す','probar, examen','try, test','試験 しけん examen|試合 しあい partido','Palabras 言 + modelo 式: poner a prueba'],
['意',13,'イ','—','intención, significado','meaning, intention','意味 いみ significado|注意 ちゅうい atención','Sonido 音 + corazón 心: lo que suena en tu interior'],
['歌',14,'カ','うた / うた-う','canción, cantar','song, sing','歌う うたう cantar|歌手 かしゅ cantante','Dos bocas 可可 + bostezo 欠: abrir la boca y cantar'],
['親',16,'シン','おや / した-しい','padres, íntimo','parent, intimate','親 おや padres|両親 りょうしん ambos-padres','Árbol 木 de pie 立 que te mira 見: tus padres'],
['館',16,'カン','—','edificio, sala','hall, building','図書館 としょかん biblioteca|映画館 えいがかん cine','Comida 食 + oficina 官: una sala de servicio']
];
const raw=`力|2|リョク・リキ|ちから|fuerza|power|努力 どりょく esfuerzo;体力 たいりょく resistencia
口|3|コウ・ク|くち|boca|mouth|入口 いりぐち entrada;出口 でぐち salida|Dibujo de una boca abierta
工|3|コウ・ク|—|artesanía|craft|工場 こうじょう fábrica;工事 こうじ obras
夕|3|セキ|ゆう|tarde|evening|夕方 ゆうがた atardecer;夕飯 ゆうはん cena
手|4|シュ|て|mano|hand|手紙 てがみ carta;上手 じょうず hábil|Una mano con sus dedos
方|4|ホウ|かた|dirección, manera|direction|方法 ほうほう método;味方 みかた aliado
不|4|フ・ブ|—|negación|negative|不便 ふべん incómodo;不安 ふあん inquietud
元|4|ゲン・ガン|もと|origen, inicio|beginning|元気 げんき ánimo;元日 がんじつ año-nuevo
止|4|シ|と-まる|detener|stop|止まる とまる detenerse;中止 ちゅうし cancelación
公|4|コウ|おおやけ|público|public|公園 こうえん parque;公共 こうきょう público
犬|4|ケン|いぬ|perro|dog|犬 いぬ perro;子犬 こいぬ cachorro|Un perro 大 con una orejita ・
牛|4|ギュウ|うし|vaca|cow|牛肉 ぎゅうにく carne-de-res;牛乳 ぎゅうにゅう leche|Una cabeza de vaca con cuernos
目|5|モク|め|ojo|eye|目 め ojo;目的 もくてき objetivo|Un ojo visto de lado
立|5|リツ|た-つ|ponerse de pie|stand up|立つ たつ pararse;国立 こくりつ nacional|Una persona de pie sobre el suelo
用|5|ヨウ|もち-いる|usar|utilize|用事 ようじ asunto;利用 りよう uso
田|5|デン|た|arrozal|rice field|田んぼ たんぼ arrozal;田中 たなか Tanaka|Un campo dividido en parcelas
代|5|ダイ|か-わる|reemplazar, era|substitute|時代 じだい época;代わり かわり reemplazo
正|5|セイ・ショウ|ただ-しい|correcto|correct|正しい ただしい correcto;正月 しょうがつ año-nuevo
主|5|シュ|ぬし|señor, principal|lord|主人 しゅじん esposo;主に おもに principalmente
仕|5|シ|つか-える|servir|attend|仕事 しごと trabajo;仕方 しかた manera
可|5|カ|—|poder, posible|can|可能 かのう posible;不可 ふか no-permitido
台|5|ダイ・タイ|—|plataforma|pedestal|台所 だいどころ cocina;台風 たいふう tifón
去|5|キョ|さ-る|irse, pasado|gone|去年 きょねん año-pasado;過去 かこ pasado
広|5|コウ|ひろ-い|amplio|wide|広い ひろい amplio;広場 ひろば plaza
古|5|コ|ふる-い|viejo|old|古い ふるい viejo;中古 ちゅうこ usado|Diez 十 generaciones de bocas 口 contando historias
兄|5|ケイ・キョウ|あに|hermano mayor|elder brother|お兄さん おにいさん hermano-mayor;兄弟 きょうだい hermanos
冬|5|トウ|ふゆ|invierno|winter|冬 ふゆ invierno;冬休み ふゆやすみ vacaciones-de-invierno
会|6|カイ|あ-う|reunirse|meeting|会う あう encontrarse;会社 かいしゃ empresa
自|6|ジ・シ|みずか-ら|uno mismo|oneself|自分 じぶん uno-mismo;自然 しぜん naturaleza
死|6|シ|し-ぬ|morir|death|死ぬ しぬ morir;死亡 しぼう fallecimiento
安|6|アン|やす-い|barato, tranquilo|relax|安い やすい barato;安心 あんしん tranquilidad|Una mujer 女 bajo un techo 宀: paz
多|6|タ|おお-い|mucho|many|多い おおい mucho;多分 たぶん probablemente|Dos 夕 (tardes) apiladas: muchas tardes
早|6|ソウ|はや-い|temprano|early|早い はやい temprano;早朝 そうちょう madrugada
色|6|ショク・シキ|いろ|color|color|色 いろ color;景色 けしき paisaje
字|6|ジ|あざ|carácter|character|文字 もじ letra;漢字 かんじ kanji|Un niño 子 bajo un techo 宀: aprende letras
肉|6|ニク|—|carne|meat|肉 にく carne;牛肉 ぎゅうにく carne-de-res|Un trozo de carne con vetas
言|7|ゲン・ゴン|い-う|decir|say|言う いう decir;言葉 ことば palabra|Una boca 口 que emite líneas de voz
体|7|タイ|からだ|cuerpo|body|体 からだ cuerpo;体育 たいいく educación-física
作|7|サク|つく-る|hacer|make|作る つくる hacer;作文 さくぶん redacción
私|7|シ|わたし|yo, privado|private|私 わたし yo;私立 しりつ privado
社|7|シャ|やしろ|empresa, santuario|company|会社 かいしゃ empresa;社会 しゃかい sociedad
別|7|ベツ|わか-れる|separar|separate|別れる わかれる separarse;特別 とくべつ especial
近|7|キン|ちか-い|cerca|near|近い ちかい cerca;最近 さいきん recientemente
身|7|シン|み|cuerpo, persona|somebody|身分 みぶん identidad;出身 しゅっしん origen
足|7|ソク|あし|pie, bastar|leg|足 あし pie;足りる たりる bastar|Una boca 口 sobre el pie 止
売|7|バイ|う-る|vender|sell|売る うる vender;売店 ばいてん quiosco
花|7|カ|はな|flor|flower|花 はな flor;花見 はなみ ver-las-flores|Hierba ⺾ que se transforma 化 en flor
赤|7|セキ|あか|rojo|red|赤い あかい rojo;赤ちゃん あかちゃん bebé
町|7|チョウ|まち|pueblo|town|町 まち pueblo;町内 ちょうない barrio
走|7|ソウ|はし-る|correr|run|走る はしる correr;走者 そうしゃ corredor
究|7|キュウ|きわ-める|investigar a fondo|research|研究 けんきゅう investigación;究明 きゅうめい esclarecimiento
図|7|ズ・ト|はか-る|mapa, plano|map|地図 ちず mapa;図書館 としょかん biblioteca
弟|7|テイ・ダイ|おとうと|hermano menor|younger brother|弟 おとうと hermano-menor;兄弟 きょうだい hermanos
事|8|ジ|こと|asunto, cosa|matter|仕事 しごと trabajo;事故 じこ accidente
者|8|シャ|もの|persona|someone|医者 いしゃ médico;若者 わかもの joven
明|8|メイ|あか-るい|brillante|bright|明るい あかるい brillante;説明 せつめい explicación|Sol 日 y luna 月: brillo máximo
知|8|チ|し-る|saber|know|知る しる saber;知識 ちしき conocimiento|Una flecha 矢 que llega a la boca 口: lo sabes
物|8|ブツ・モツ|もの|cosa|thing|食べ物 たべもの comida;買い物 かいもの compras
的|8|テキ|まと|objetivo, -ico|bull’s eye|目的 もくてき objetivo;的 まと blanco
使|8|シ|つか-う|usar|use|使う つかう usar;大使 たいし embajador
始|8|シ|はじ-める|comenzar|commence|始める はじめる comenzar;開始 かいし inicio
画|8|ガ・カク|—|dibujo|brush-stroke|映画 えいが película;画家 がか pintor
味|8|ミ|あじ|sabor|flavor|味 あじ sabor;意味 いみ significado|Una boca 口 que prueba el sabor
空|8|クウ|そら・から|cielo, vacío|empty|空 そら cielo;空港 くうこう aeropuerto
夜|8|ヤ|よる|noche|night|夜 よる noche;今夜 こんや esta-noche
店|8|テン|みせ|tienda|store|店 みせ tienda;喫茶店 きっさてん cafetería
歩|8|ホ|ある-く|caminar|walk|歩く あるく caminar;散歩 さんぽ paseo
注|8|チュウ|そそ-ぐ|verter, atender|pour|注意 ちゅうい atención;注文 ちゅうもん pedido
京|8|キョウ・ケイ|—|capital|capital|東京 とうきょう Tokio;京都 きょうと Kioto
英|8|エイ|—|Inglaterra|England|英語 えいご inglés;英国 えいこく Reino-Unido
服|8|フク|—|ropa|clothing|服 ふく ropa;洋服 ようふく ropa-occidental
青|8|セイ|あお|azul|blue|青い あおい azul;青空 あおぞら cielo-azul
姉|8|シ|あね|hermana mayor|elder sister|お姉さん おねえさん hermana-mayor;姉 あね mi-hermana-mayor
妹|8|マイ|いもうと|hermana menor|younger sister|妹 いもうと hermana-menor;姉妹 しまい hermanas
思|9|シ|おも-う|pensar|think|思う おもう pensar;思い出 おもいで recuerdo|Un campo 田 sobre el corazón 心: lo que piensas
度|9|ド|たび|grado, vez|degrees|今度 こんど la-próxima-vez;温度 おんど temperatura
界|9|カイ|—|mundo, límite|world|世界 せかい mundo;限界 げんかい límite
待|9|タイ|ま-つ|esperar|wait|待つ まつ esperar;招待 しょうたい invitación
音|9|オン|おと・ね|sonido|sound|音 おと sonido;音楽 おんがく música
海|9|カイ|うみ|mar|sea|海 うみ mar;海外 かいがい extranjero
重|9|ジュウ|おも-い|pesado|heavy|重い おもい pesado;重要 じゅうよう importante
品|9|ヒン|しな|artículo|goods|品物 しなもの mercancía;作品 さくひん obra
計|9|ケイ|はか-る|medir, plan|plot|時計 とけい reloj;計画 けいかく plan
送|9|ソウ|おく-る|enviar|escort|送る おくる enviar;放送 ほうそう transmisión
映|9|エイ|うつ-る|reflejar, proyectar|reflect|映画 えいが película;映る うつる reflejarse
室|9|シツ|むろ|habitación|room|教室 きょうしつ salón;和室 わしつ cuarto-japonés
建|9|ケン・コン|た-てる|construir|build|建てる たてる construir;建物 たてもの edificio
研|9|ケン|と-ぐ|pulir, investigar|polish|研究 けんきゅう investigación;研修 けんしゅう capacitación
春|9|シュン|はる|primavera|springtime|春 はる primavera;春休み はるやすみ vacaciones-de-primavera
秋|9|シュウ|あき|otoño|autumn|秋 あき otoño;秋分 しゅうぶん equinoccio-de-otoño
茶|9|チャ・サ|—|té|tea|お茶 おちゃ té;喫茶店 きっさてん cafetería
洋|9|ヨウ|—|océano, occidental|ocean|洋服 ようふく ropa-occidental;西洋 せいよう Occidente
昼|9|チュウ|ひる|mediodía|daytime|昼 ひる mediodía;昼ご飯 ひるごはん almuerzo
家|10|カ・ケ|いえ・うち|casa|house|家 いえ casa;家族 かぞく familia|Un cerdo 豕 bajo un techo 宀: el hogar antiguo
通|10|ツウ|とお-る・かよ-う|pasar, ir y venir|traffic|通る とおる pasar;交通 こうつう tráfico
員|10|イン|—|miembro|employee|会社員 かいしゃいん empleado;店員 てんいん dependiente
真|10|シン|ま|verdad|true|写真 しゃしん foto;真ん中 まんなか centro
帰|10|キ|かえ-る|volver|homecoming|帰る かえる volver;帰国 きこく regreso-al-país
起|10|キ|お-きる|levantarse|rouse|起きる おきる levantarse;起こす おこす despertar
料|10|リョウ|—|tarifa, material|fee|料理 りょうり cocina;無料 むりょう gratis
特|10|トク|—|especial|special|特別 とくべつ especial;特急 とっきゅう expreso
院|10|イン|—|institución|Inst.|病院 びょういん hospital;大学院 だいがくいん posgrado
旅|10|リョ|たび|viaje|trip|旅行 りょこう viaje;旅 たび viaje
夏|10|カ|なつ|verano|summer|夏 なつ verano;夏休み なつやすみ vacaciones-de-verano
借|10|シャク|か-りる|pedir prestado|borrow|借りる かりる pedir-prestado;借金 しゃっきん deuda
勉|10|ベン|—|esforzarse|exertion|勉強 べんきょう estudio;勉学 べんがく estudios
理|11|リ|—|razón, lógica|logic|料理 りょうり cocina;無理 むり imposible
動|11|ドウ|うご-く|moverse|move|動く うごく moverse;動物 どうぶつ animal
問|11|モン|と-う|preguntar|question|問題 もんだい problema;質問 しつもん pregunta
強|11|キョウ|つよ-い|fuerte|strong|強い つよい fuerte;勉強 べんきょう estudio
教|11|キョウ|おし-える|enseñar|teach|教える おしえる enseñar;教室 きょうしつ salón
終|11|シュウ|お-わる|terminar|end|終わる おわる terminar;最終 さいしゅう final
悪|11|アク|わる-い|malo|bad|悪い わるい malo;悪口 わるぐち insulto
族|11|ゾク|—|familia, tribu|tribe|家族 かぞく familia;民族 みんぞく etnia
転|11|テン|ころ-ぶ|girar, caer|revolve|運転 うんてん conducir;転ぶ ころぶ caerse
週|11|シュウ|—|semana|week|今週 こんしゅう esta-semana;毎週 まいしゅう cada-semana
黒|11|コク|くろ|negro|black|黒い くろい negro;黒板 こくばん pizarra
習|11|シュウ|なら-う|aprender|learn|習う ならう aprender;練習 れんしゅう práctica
堂|11|ドウ|—|sala, salón|public chamber|食堂 しょくどう comedor;講堂 こうどう auditorio
鳥|11|チョウ|とり|ave|bird|鳥 とり ave;小鳥 ことり pajarito
魚|11|ギョ|さかな|pez|fish|魚 さかな pescado;金魚 きんぎょ pez-dorado
開|12|カイ|あ-ける・ひら-く|abrir|open|開ける あける abrir;開く ひらく abrirse
無|12|ム・ブ|な-い|nada, sin|nothingness|無い ない no-haber;無料 むりょう gratis
道|12|ドウ|みち|camino|road-way|道 みち camino;歩道 ほどう acera
着|12|チャク|き-る・つ-く|llegar, vestir|don|着く つく llegar;着る きる vestir
集|12|シュウ|あつ-まる|reunir|gather|集まる あつまる reunirse;集める あつめる juntar
朝|12|チョウ|あさ|mañana|morning|朝 あさ mañana;朝ご飯 あさごはん desayuno
買|12|バイ|か-う|comprar|buy|買う かう comprar;買い物 かいもの compras
飲|12|イン|の-む|beber|drink|飲む のむ beber;飲み物 のみもの bebida
飯|12|ハン|めし|comida, arroz|meal|ご飯 ごはん comida;晩ご飯 ばんごはん cena
貸|12|タイ|か-す|prestar|lend|貸す かす prestar;貸家 かしや casa-de-alquiler
新|13|シン|あたら-しい|nuevo|new|新しい あたらしい nuevo;新聞 しんぶん periódico
業|13|ギョウ|わざ|negocio, oficio|business|授業 じゅぎょう clase;卒業 そつぎょう graduación
楽|13|ガク・ラク|たの-しい|música, divertido|music|楽しい たのしい divertido;音楽 おんがく música
漢|13|カン|—|China (dinastía Han)|Sino-|漢字 かんじ kanji;漢方 かんぽう medicina-china
銀|14|ギン|—|plata|silver|銀行 ぎんこう banco;銀色 ぎんいろ plateado
駅|14|エキ|—|estación|station|駅 えき estación;駅前 えきまえ frente-a-la-estación|Un caballo 馬 que descansa en la estación
質|15|シツ|—|calidad, sustancia|substance|質問 しつもん pregunta;品質 ひんしつ calidad
題|18|ダイ|—|tema|topic|問題 もんだい problema;宿題 しゅくだい tarea
験|18|ケン|—|prueba|verification|試験 しけん examen;経験 けいけん experiencia
曜|18|ヨウ|—|día de la semana|weekday|曜日 ようび día-de-la-semana;日曜日 にちようび domingo`;
const raw5=`一|1|イチ・イツ|ひと-つ|uno|one|一つ ひとつ uno;一月 いちがつ enero|Una sola raya: uno
二|2|ニ|ふた-つ|dos|two|二つ ふたつ dos;二人 ふたり dos-personas|Dos rayas: dos
三|3|サン|みっ-つ|tres|three|三つ みっつ tres;三月 さんがつ marzo|Tres rayas: tres
四|5|シ|よ-つ・よん|cuatro|four|四つ よっつ cuatro;四月 しがつ abril
五|4|ゴ|いつ-つ|cinco|five|五つ いつつ cinco;五月 ごがつ mayo
六|4|ロク|むっ-つ|seis|six|六つ むっつ seis;六月 ろくがつ junio
七|2|シチ|なな-つ|siete|seven|七つ ななつ siete;七月 しちがつ julio
八|2|ハチ|やっ-つ|ocho|eight|八つ やっつ ocho;八月 はちがつ agosto|Dos trazos que se abren hacia abajo
九|2|キュウ・ク|ここの-つ|nueve|nine|九つ ここのつ nueve;九月 くがつ septiembre
十|2|ジュウ|とお|diez|ten|十 とお diez;十月 じゅうがつ octubre|Una cruz: diez
百|6|ヒャク|—|cien|hundred|百 ひゃく cien;三百 さんびゃく trescientos|Uno 一 sobre blanco 白: cien
千|3|セン|ち|mil|thousand|千 せん mil;三千 さんぜん tres-mil
万|3|マン・バン|—|diez mil|ten thousand|一万 いちまん diez-mil;万年筆 まんねんひつ pluma-estilográfica
円|4|エン|まる-い|yen, círculo|yen, circle|百円 ひゃくえん cien-yenes;円い まるい redondo
日|4|ニチ・ジツ|ひ・か|día, sol|day, sun|毎日 まいにち todos-los-días;日曜日 にちようび domingo|Un sol con una línea en el centro
月|4|ゲツ・ガツ|つき|luna, mes|moon, month|月 つき luna;月曜日 げつようび lunes|Una luna creciente
火|4|カ|ひ|fuego|fire|火曜日 かようび martes;花火 はなび fuegos-artificiales|Una fogata que suelta chispas
水|4|スイ|みず|agua|water|水 みず agua;水曜日 すいようび miércoles|Un río con gotas que salpican
木|4|モク・ボク|き|árbol, madera|tree|木 き árbol;木曜日 もくようび jueves|Un árbol con ramas y raíces
金|8|キン|かね|oro, dinero|gold, money|お金 おかね dinero;金曜日 きんようび viernes
土|3|ド|つち|tierra|soil|土 つち tierra;土曜日 どようび sábado|Un brote que sale de la tierra
年|6|ネン|とし|año|year|今年 ことし este-año;来年 らいねん próximo-año
時|10|ジ|とき|hora, tiempo|time|時間 じかん tiempo;時計 とけい reloj|Sol 日 + templo 寺: la campana que marca la hora
間|12|カン・ケン|あいだ・ま|intervalo, entre|interval|時間 じかん tiempo;人間 にんげん ser-humano|Un sol 日 que se asoma entre las puertas 門
午|4|ゴ|—|mediodía|noon|午前 ごぜん antes-del-mediodía;午後 ごご por-la-tarde
今|4|コン|いま|ahora|now|今 いま ahora;今日 きょう hoy
毎|6|マイ|—|cada|every|毎日 まいにち todos-los-días;毎朝 まいあさ cada-mañana
半|5|ハン|なか-ば|mitad|half|半分 はんぶん mitad;三時半 さんじはん tres-y-media
人|2|ジン・ニン|ひと|persona|person|人 ひと persona;日本人 にほんじん japonés|Una persona caminando
男|7|ダン・ナン|おとこ|hombre|man|男 おとこ hombre;男の子 おとこのこ niño|Fuerza 力 en el arrozal 田
女|3|ジョ・ニョ|おんな|mujer|woman|女 おんな mujer;女の子 おんなのこ niña
子|3|シ・ス|こ|niño|child|子ども こども niño;帽子 ぼうし sombrero|Un bebé con los brazos abiertos
父|4|フ|ちち|padre|father|お父さん おとうさん papá;父 ちち mi-padre
母|5|ボ|はは|madre|mother|お母さん おかあさん mamá;母 はは mi-madre
友|4|ユウ|とも|amigo|friend|友だち ともだち amigo;友人 ゆうじん amigo|Dos manos que se ayudan
名|6|メイ・ミョウ|な|nombre|name|名前 なまえ nombre;有名 ゆうめい famoso|De noche 夕 dices tu nombre con la boca 口
生|5|セイ・ショウ|い-きる・う-まれる|vida, nacer|life|先生 せんせい profesor;学生 がくせい estudiante|Un brote que crece en la tierra
先|6|セン|さき|antes, adelante|previous|先生 せんせい profesor;先週 せんしゅう semana-pasada
上|3|ジョウ|うえ・あ-げる|arriba|above|上 うえ arriba;上手 じょうず hábil|Una marca sobre la línea: arriba
下|3|カ・ゲ|した・さ-がる|abajo|below|下 した abajo;地下鉄 ちかてつ metro|Una marca bajo la línea: abajo
中|4|チュウ|なか|dentro, medio|middle|中 なか dentro;中国 ちゅうごく China|Una línea que atraviesa el centro de una caja
外|5|ガイ・ゲ|そと|fuera|outside|外 そと afuera;外国 がいこく extranjero
右|5|ウ・ユウ|みぎ|derecha|right|右 みぎ derecha;右手 みぎて mano-derecha|La mano que lleva la comida a la boca 口
左|5|サ|ひだり|izquierda|left|左 ひだり izquierda;左手 ひだりて mano-izquierda|La mano que sostiene la herramienta 工
前|9|ゼン|まえ|delante, antes|before|前 まえ delante;名前 なまえ nombre
後|9|ゴ・コウ|うし-ろ・あと|detrás, después|behind, after|後ろ うしろ detrás;午後 ごご por-la-tarde
東|8|トウ|ひがし|este|east|東 ひがし este;東京 とうきょう Tokio|El sol 日 saliendo detrás de un árbol 木
西|6|セイ・サイ|にし|oeste|west|西 にし oeste;西口 にしぐち salida-oeste
南|9|ナン|みなみ|sur|south|南 みなみ sur;南口 みなみぐち salida-sur
北|5|ホク|きた|norte|north|北 きた norte;東北 とうほく Tohoku|Dos personas sentadas espalda con espalda
山|3|サン|やま|montaña|mountain|山 やま montaña;富士山 ふじさん monte-Fuji|Los tres picos de una montaña
川|3|セン|かわ|río|river|川 かわ río;小川 おがわ arroyo|Agua que corre en tres líneas
天|4|テン|あめ|cielo|heaven|天気 てんき clima;天国 てんごく paraíso|Lo que está sobre 一 la persona grande 大
気|6|キ|—|espíritu, aire|spirit|元気 げんき ánimo;天気 てんき clima
雨|8|ウ|あめ|lluvia|rain|雨 あめ lluvia;大雨 おおあめ lluvia-fuerte|Gotas que caen desde una nube
電|13|デン|—|electricidad|electricity|電車 でんしゃ tren;電話 でんわ teléfono|Lluvia 雨 con un rayo
車|7|シャ|くるま|coche|car|車 くるま coche;電車 でんしゃ tren|Un carro visto desde arriba con sus ruedas
国|8|コク|くに|país|country|国 くに país;外国 がいこく extranjero|Una joya 玉 dentro de las fronteras 囗
行|6|コウ・ギョウ|い-く|ir|go|行く いく ir;銀行 ぎんこう banco|Un cruce de caminos
来|7|ライ|く-る|venir|come|来る くる venir;来年 らいねん próximo-año
出|5|シュツ|で-る・だ-す|salir|exit|出る でる salir;出口 でぐち salida|Dos montañas 山 apiladas: brotar hacia afuera
入|2|ニュウ|はい-る・い-れる|entrar|enter|入る はいる entrar;入口 いりぐち entrada
見|7|ケン|み-る|ver|see|見る みる ver;花見 はなみ ver-las-flores|Un ojo 目 con piernas: ir a ver
聞|14|ブン|き-く|oír, preguntar|hear|聞く きく escuchar;新聞 しんぶん periódico|Una oreja 耳 pegada a la puerta 門
食|9|ショク|た-べる|comer|eat|食べる たべる comer;食堂 しょくどう comedor
休|6|キュウ|やす-む|descansar|rest|休む やすむ descansar;休み やすみ vacaciones|Una persona 亻 apoyada en un árbol 木
学|8|ガク|まな-ぶ|estudiar|study|学生 がくせい estudiante;大学 だいがく universidad|Un niño 子 bajo un techo aprendiendo
校|10|コウ|—|escuela|school|学校 がっこう escuela;高校 こうこう bachillerato
語|14|ゴ|かた-る|idioma, palabra|language|日本語 にほんご japonés;英語 えいご inglés
読|14|ドク|よ-む|leer|read|読む よむ leer;読書 どくしょ lectura
書|10|ショ|か-く|escribir|write|書く かく escribir;辞書 じしょ diccionario|Un pincel 聿 sobre el papel
話|13|ワ|はな-す|hablar|talk|話す はなす hablar;電話 でんわ teléfono|Palabras 言 que salen de la lengua 舌
本|5|ホン|もと|libro, origen|book|本 ほん libro;日本 にほん Japón|Un árbol 木 con una marca en la raíz
何|7|カ|なに・なん|qué|what|何 なに qué;何人 なんにん cuántas-personas
大|3|ダイ・タイ|おお-きい|grande|big|大きい おおきい grande;大学 だいがく universidad|Una persona con los brazos bien abiertos
小|3|ショウ|ちい-さい|pequeño|small|小さい ちいさい pequeño;小学校 しょうがっこう primaria
高|10|コウ|たか-い|alto, caro|tall, expensive|高い たかい alto;高校 こうこう bachillerato|Una torre alta
長|8|チョウ|なが-い|largo, jefe|long|長い ながい largo;社長 しゃちょう presidente-de-empresa|El pelo largo de un anciano
白|5|ハク|しろ|blanco|white|白い しろい blanco;面白い おもしろい interesante`;
const rawKana=`あ|a|あめ ame lluvia;あさ asa mañana
い|i|いぬ inu perro;いえ ie casa
う|u|うみ umi mar;うし ushi vaca
え|e|えき eki estación;えんぴつ enpitsu lápiz
お|o|おちゃ ocha té;おかし okashi dulces
か|ka|かさ kasa paraguas;かお kao cara
き|ki|きた kita norte;きって kitte sello
く|ku|くち kuchi boca;くつ kutsu zapatos
け|ke|けいと keito lana;いけ ike estanque
こ|ko|ここ koko aquí;ねこ neko gato
さ|sa|さかな sakana pez;かさ kasa paraguas
し|shi|しお shio sal;うし ushi vaca
す|su|すし sushi sushi;いす isu silla
せ|se|せかい sekai mundo;あせ ase sudor
そ|so|そら sora cielo;うそ uso mentira
た|ta|たまご tamago huevo;かた kata hombro
ち|chi|ちず chizu mapa;くち kuchi boca
つ|tsu|つき tsuki luna;くつ kutsu zapatos
て|te|てがみ tegami carta;ちかてつ chikatetsu metro
と|to|とり tori pájaro;そと soto afuera
な|na|なつ natsu verano;さかな sakana pez
に|ni|にく niku carne;かに kani cangrejo
ぬ|nu|いぬ inu perro;ぬの nuno tela
ね|ne|ねこ neko gato;おかね okane dinero
の|no|のり nori alga;きのこ kinoko seta
は|ha|はな hana flor;はし hashi palillos
ひ|hi|ひと hito persona;ひかり hikari luz
ふ|fu|ふね fune barco;ふゆ fuyu invierno
へ|he|へや heya habitación;へび hebi serpiente
ほ|ho|ほし hoshi estrella;ほん hon libro
ま|ma|まど mado ventana;くま kuma oso
み|mi|みみ mimi oreja;みず mizu agua
む|mu|むし mushi insecto;むね mune pecho
め|me|め me ojo;あめ ame lluvia
も|mo|もり mori bosque;くも kumo nube
や|ya|やま yama montaña;へや heya habitación
ゆ|yu|ゆき yuki nieve;ゆび yubi dedo
よ|yo|よる yoru noche;よむ yomu leer
ら|ra|さくら sakura cerezo;そら sora cielo
り|ri|りんご ringo manzana;とり tori pájaro
る|ru|よる yoru noche;くるま kuruma coche
れ|re|れきし rekishi historia;これ kore esto
ろ|ro|ろく roku seis;いろ iro color
わ|wa|わに wani cocodrilo;かわ kawa río
を|wo|てをあらう tewoarau lavarse-las-manos;ほんをよむ honwoyomu leer-un-libro
ん|n|ほん hon libro;みかん mikan mandarina
が|ga|がっこう gakkou escuela;ながい nagai largo
ぎ|gi|ぎんこう ginkou banco;かぎ kagi llave
ぐ|gu|ぐあい guai estado;かぐ kagu muebles
げ|ge|げんき genki ánimo;ひげ hige barba
ご|go|ごはん gohan comida;たまご tamago huevo
ざ|za|ざっし zasshi revista;ひざ hiza rodilla
じ|ji|じかん jikan tiempo;かじ kaji incendio
ず|zu|みず mizu agua;ちず chizu mapa
ぜ|ze|かぜ kaze viento;ぜんぶ zenbu todo
ぞ|zo|ぞう zou elefante;かぞく kazoku familia
だ|da|だいがく daigaku universidad;からだ karada cuerpo
ぢ|ji|はなぢ hanaji sangrado-de-nariz;ちぢむ chijimu encogerse
づ|zu|つづく tsuzuku continuar;みかづき mikazuki luna-creciente
で|de|でんわ denwa teléfono;そで sode manga
ど|do|どこ doko dónde;まど mado ventana
ば|ba|ばら bara rosa;ことば kotoba palabra
び|bi|へび hebi serpiente;ゆび yubi dedo
ぶ|bu|ぶた buta cerdo;かぶ kabu nabo
べ|be|べんとう bentou almuerzo;たべもの tabemono comida
ぼ|bo|ぼうし boushi sombrero;ぼく boku yo
ぱ|pa|かんぱい kanpai salud-(brindis);いっぱい ippai lleno
ぴ|pi|ぴかぴか pikapika brillante;えんぴつ enpitsu lápiz
ぷ|pu|てんぷら tenpura tempura;きっぷ kippu billete
ぺ|pe|ぺらぺら perapera con-fluidez;ぺこぺこ pekopeko con-hambre
ぽ|po|さんぽ sanpo paseo;しっぽ shippo cola
きゃ|kya|きゃく kyaku cliente
きゅ|kyu|きゅうり kyuuri pepino
きょ|kyo|きょう kyou hoy
しゃ|sha|しゃしん shashin foto
しゅ|shu|しゅくだい shukudai tarea
しょ|sho|しょくどう shokudou comedor
ちゃ|cha|おちゃ ocha té
ちゅ|chu|ちゅうい chuui atención
ちょ|cho|ちょっと chotto un-poco
にゃ|nya|こんにゃく konnyaku konjac
にゅ|nyu|にゅういん nyuuin hospitalización
にょ|nyo|にょろにょろ nyoronyoro serpenteando
ひゃ|hya|ひゃく hyaku cien
ひゅ|hyu|ひゅうひゅう hyuuhyuu silbido-del-viento
ひょ|hyo|ひょう hyou granizo
みゃ|mya|みゃく myaku pulso
みょ|myo|みょうじ myouji apellido
りゃ|rya|りゃくご ryakugo abreviatura
りゅ|ryu|りゅう ryuu dragón
りょ|ryo|りょこう ryokou viaje
ぎゃ|gya|ぎゃく gyaku al-revés
ぎゅ|gyu|ぎゅうにゅう gyuunyuu leche
ぎょ|gyo|きんぎょ kingyo pez-dorado
じゃ|ja|じゃま jama estorbo
じゅ|ju|じゅぎょう jugyou clase
じょ|jo|じょうず jouzu hábil
びゃ|bya|さんびゃく sanbyaku trescientos
びゅ|byu|びゅうびゅう byuubyuu viento-fuerte
びょ|byo|びょういん byouin hospital
ぴゃ|pya|はっぴゃく happyaku ochocientos
ぴゅ|pyu|ぴゅうぴゅう pyuupyuu silbido
ぴょ|pyo|ぴょんぴょん pyonpyon saltando
ア|a|アイス aisu helado;アメリカ amerika Estados-Unidos
イ|i|イギリス igirisu Inglaterra;イタリア itaria Italia
ウ|u|ウクレレ ukurere ukelele;ウイルス uirusu virus
エ|e|エアコン eakon aire-acondicionado;エンジン enjin motor
オ|o|オレンジ orenji naranja;オムライス omuraisu omurice
カ|ka|カメラ kamera cámara;カップ kappu taza
キ|ki|キス kisu beso;キッチン kicchin cocina
ク|ku|クラス kurasu clase;クイズ kuizu concurso
ケ|ke|ケチャップ kechappu kétchup;ケア kea cuidado
コ|ko|コップ koppu vaso;ココア kokoa cacao
サ|sa|サラダ sarada ensalada;サイズ saizu talla
シ|shi|シルク shiruku seda;システム shisutemu sistema
ス|su|ストレス sutoresu estrés;ガス gasu gas
セ|se|セット setto conjunto;セロリ serori apio
ソ|so|ソックス sokkusu calcetines;ソウル souru Seúl
タ|ta|タオル taoru toalla;タイ tai Tailandia
チ|chi|チケット chiketto entrada;チキン chikin pollo
ツ|tsu|シャツ shatsu camisa;ツナ tsuna atún
テ|te|テレビ terebi televisión;テスト tesuto examen
ト|to|トマト tomato tomate;トイレ toire baño
ナ|na|ナイフ naifu cuchillo;バナナ banana plátano
ニ|ni|テニス tenisu tenis;ニット nitto tejido
ヌ|nu|カヌー kanuu canoa
ネ|ne|ネクタイ nekutai corbata;ネット netto internet
ノ|no|ピアノ piano piano;ノック nokku tocar-la-puerta
ハ|ha|ハム hamu jamón;ハンカチ hankachi pañuelo
ヒ|hi|ヒント hinto pista;ヒマラヤ himaraya Himalaya
フ|fu|フランス furansu Francia;フライパン furaipan sartén
ヘ|he|ヘルメット herumetto casco;ヘア hea peinado
ホ|ho|ホテル hoteru hotel;ホット hotto caliente
マ|ma|マスク masuku mascarilla;トマト tomato tomate
ミ|mi|ミルク miruku leche;ミス misu error
ム|mu|ハム hamu jamón;アルバム arubamu álbum
メ|me|メロン meron melón;メモ memo nota
モ|mo|モデル moderu modelo;メモ memo nota
ヤ|ya|タイヤ taiya neumático;ダイヤ daiya diamante
ユ|yu|ユーロ yuuro euro;ユーモア yuumoa humor
ヨ|yo|ヨガ yoga yoga;ヨット yotto velero
ラ|ra|ラジオ rajio radio;カメラ kamera cámara
リ|ri|リボン ribon cinta;アメリカ amerika Estados-Unidos
ル|ru|ホテル hoteru hotel;ビル biru edificio
レ|re|レモン remon limón;トイレ toire baño
ロ|ro|ロボット robotto robot;メロン meron melón
ワ|wa|ワイン wain vino;ワイシャツ waishatsu camisa-de-vestir
ヲ|wo|ヲタク wotaku otaku-(jerga)
ン|n|パン pan pan;ワイン wain vino
ガ|ga|ガム gamu chicle;ガス gasu gas
ギ|gi|ギフト gifuto regalo;ギター gitaa guitarra
グ|gu|グラス gurasu copa;グループ guruupu grupo
ゲ|ge|ゲスト gesuto invitado;ゲーム geemu videojuego
ゴ|go|ゴルフ gorufu golf;ゴリラ gorira gorila
ザ|za|ピザ piza pizza;デザイン dezain diseño
ジ|ji|ラジオ rajio radio;ジム jimu gimnasio
ズ|zu|サイズ saizu talla;チーズ chiizu queso
ゼ|ze|ゼロ zero cero;プレゼント purezento regalo
ゾ|zo|ゾンビ zonbi zombi;アマゾン amazon Amazonas
ダ|da|ダンス dansu baile;サラダ sarada ensalada
デ|de|デザイン dezain diseño;モデル moderu modelo
ド|do|ドア doa puerta;ドラマ dorama serie
バ|ba|バス basu autobús;バナナ banana plátano
ビ|bi|ビル biru edificio;テレビ terebi televisión
ブ|bu|ブラシ burashi cepillo;テーブル teeburu mesa
ベ|be|ベッド beddo cama;ベルト beruto cinturón
ボ|bo|ボタン botan botón;ボール booru pelota
パ|pa|パン pan pan;パスタ pasuta pasta
ピ|pi|ピアノ piano piano;ピザ piza pizza
プ|pu|プレゼント purezento regalo;プール puuru piscina
ペ|pe|ペン pen bolígrafo;ペット petto mascota
ポ|po|ポスト posuto buzón;ポケット poketto bolsillo
キャ|kya|キャンプ kyanpu campamento;キャベツ kyabetsu repollo
キュ|kyu|バーベキュー baabekyuu barbacoa
キョ|kyo|キョロキョロ kyorokyoro mirando-a-todos-lados
シャ|sha|シャツ shatsu camisa;シャワー shawaa ducha
シュ|shu|シュート shuuto tiro-(fútbol)
ショ|sho|ショッピング shoppingu compras
チャ|cha|チャンス chansu oportunidad
チュ|chu|チューリップ chuurippu tulipán
チョ|cho|チョコレート chokoreeto chocolate
ニャ|nya|ニャー nyaa miau
ニュ|nyu|ニュース nyuusu noticias
ニョ|nyo|ニョッキ nyokki ñoquis
ヒュ|hyu|ヒューズ hyuuzu fusible
ヒョ|hyo|ヒョウ hyou leopardo
ミャ|mya|ミャンマー myanmaa Birmania
ミュ|myu|ミュージカル myuujikaru musical
リュ|ryu|リュック ryukku mochila
ギャ|gya|ギャラリー gyararii galería
ギュ|gyu|レギュラー regyuraa titular
ギョ|gyo|ギョーザ gyooza gyoza
ジャ|ja|ジャム jamu mermelada;ジャケット jaketto chaqueta
ジュ|ju|ジュース juusu jugo
ジョ|jo|ジョギング jogingu trotar
ビュ|byu|インタビュー intabyuu entrevista
ピュ|pyu|コンピューター konpyuutaa computadora
ヴ|vu|ヴァイオリン vaiorin violín
ファ|fa|ファン fan aficionado;ソファ sofa sofá
フィ|fi|フィルム firumu película-fotográfica
フェ|fe|カフェ kafe cafetería
フォ|fo|フォーク fooku tenedor
ティ|ti|ティッシュ tisshu pañuelo-de-papel;パーティー paatii fiesta
ディ|di|ディナー dinaa cena
デュ|dyu|デュエット dyuetto dúo
ウィ|wi|ウィンク winku guiño
ウェ|we|ウェブ webu web
ウォ|wo|ウォッカ wokka vodka
シェ|she|シェフ shefu chef
ジェ|je|ジェット jetto avión-a-reacción
チェ|che|チェック chekku revisión
ツァ|tsa|モーツァルト mootsaruto Mozart
トゥ|tu|タトゥー tatuu tatuaje`;
const RAD4=`力|力 brazo flexionado
口|口 una boca abierta
工|工 herramienta de carpintero
夕|夕 luna creciente al anochecer
手|手 mano con dedos
方|方 dirección, lado
心|心 un corazón
不|*Forma compuesta: memorízalo como un bloque
元|二 dos + 儿 persona caminando
少|小 pequeño + 丿 quitar
切|七 siete + 刀 cuchillo
止|止 huella de un pie que se detiene
文|文 escritura, dibujos
公|八 separar + 厶 privado
犬|犬 perro (大 + un punto)
牛|牛 vaca con cuernos
目|目 un ojo
立|立 persona de pie sobre el suelo
用|用 usar
田|田 arrozal con parcelas
代|亻 persona + 弋 estaca
世|*Tres decenas (十) unidas: una generación
正|一 línea + 止 detenerse
以|厶 yo + 人 persona
主|丶 llama + 王 rey
仕|亻 persona + 士 servidor
可|丁 clavo + 口 boca
台|厶 yo + 口 boca
去|土 tierra + 厶 yo
広|广 techo + 厶 yo
写|冖 cubierta + 与 dar
古|十 diez + 口 boca
兄|口 boca + 儿 persona caminando
冬|夂 paso lento + 冫 hielo
会|人 persona + 云 decir
自|自 una nariz
同|冂 marco + 一 línea + 口 boca
地|土 tierra + 也 serpiente
死|歹 hueso + 匕 persona
考|耂 anciano + 丂 bastón
安|宀 techo + 女 mujer
多|夕 tarde + 夕 tarde
早|日 sol + 十 diez
有|ナ mano + 月 carne
色|色 color
字|宀 techo + 子 niño
肉|肉 carne con vetas
言|言 palabra (口 con líneas)
体|亻 persona + 本 base
作|亻 persona + 乍 hacer
私|禾 grano + 厶 yo
社|礻 altar + 土 tierra
別|*Un hueso separado con el cuchillo 刂
近|辶 camino + 斤 hacha
身|身 cuerpo de perfil
足|足 pie y pierna
売|士 samurái + 冖 cubierta + 儿 persona caminando
住|亻 persona + 主 dueño
医|匚 caja + 矢 flecha
花|艹 hierba + 化 cambiar
赤|赤 rojo
町|田 campo + 丁 calle
走|走 persona corriendo
究|穴 cueva + 九 nueve
図|*Un plano dibujado dentro de un marco 囗
弟|*Forma compuesta: memorízalo como un bloque
事|*Forma compuesta: memorízalo como un bloque
者|耂 anciano + 日 sol
明|日 sol + 月 luna
知|矢 flecha + 口 boca
物|牜 vaca + 勿 no
的|白 blanco + 勺 cucharón
使|亻 persona + 吏 funcionario
始|女 mujer + 台 pedestal
画|*Un campo 田 dentro de un marco: un cuadro
味|口 boca + 未 aún no
空|穴 cueva + 工 obra
夜|亠 tapa + 亻 persona + 夕 noche
店|广 techo + 占 ocupar
歩|止 pie + 少 poco
注|氵 agua + 主 dueño
京|亠 tapa + 口 boca + 小 pequeño
英|艹 hierba + 央 centro
服|月 carne + 卩 sello + 又 mano
青|龶 brote + 月 luna
姉|女 mujer + 市 mercado
妹|女 mujer + 未 aún no
思|田 campo + 心 corazón
度|广 techo + 廿 veinte + 又 mano
界|田 campo + 介 entre
待|彳 caminar + 寺 templo
音|立 de pie + 日 sol
海|氵 agua + 毎 cada
重|千 mil + 里 aldea
品|口 boca + 口 boca + 口 boca
計|言 palabra + 十 diez
送|辶 camino + 关 despedir
映|日 sol + 央 centro
室|宀 techo + 至 llegar
建|廴 caminar + 聿 pincel
研|石 piedra + 幵 nivelar
春|*Un sol 日 y brotes que despiertan: primavera
秋|禾 grano + 火 fuego
茶|艹 hierba + 人 persona + 木 árbol
洋|氵 agua + 羊 oveja
昼|*Un sol 日 en lo alto del día
家|宀 techo + 豕 cerdo
通|辶 camino + 甬 pasaje
員|口 boca + 貝 concha
真|十 diez + 目 ojo + 八 ocho
帰|*Forma compuesta: memorízalo como un bloque
起|走 correr + 己 uno mismo
料|米 arroz + 斗 medida
特|牜 vaca + 寺 templo
院|阝 colina + 完 completo
病|疒 enfermedad + 丙 tercero
紙|糸 hilo + 氏 familia
旅|*Forma compuesta: memorízalo como un bloque
夏|*Forma compuesta: memorízalo como un bloque
借|亻 persona + 昔 antiguo
勉|免 evitar + 力 fuerza
理|王 jade + 里 aldea
動|重 pesado + 力 fuerza
問|門 puerta + 口 boca
強|弘 amplio + 虫 insecto
教|孝 piedad filial + 攵 golpear
終|糸 hilo + 冬 invierno
悪|亜 segundo + 心 corazón
族|方 bandera + 矢 flecha
転|車 carro + 云 decir
週|辶 camino + 周 alrededor
黒|里 aldea + 灬 fuego
習|羽 alas + 白 blanco
堂|尚 estimar + 土 tierra
鳥|鳥 un pájaro
魚|魚 un pez con aletas
開|門 puerta + 开 abrir
無|*Forma compuesta: memorízalo como un bloque
道|辶 camino + 首 cabeza
着|羊 oveja + 目 ojo
運|辶 camino + 軍 ejército
集|隹 pájaro + 木 árbol
朝|*Sol 日 y luna 月 a la vez: la mañana
買|罒 red + 貝 concha
飲|飠 comer + 欠 bostezar
飯|飠 comer + 反 volver
貸|代 reemplazar + 貝 concha
新|立 de pie + 木 árbol + 斤 hacha
業|*Forma compuesta: memorízalo como un bloque
楽|*Forma compuesta: memorízalo como un bloque
漢|*Agua 氵 junto a una forma que significa arcilla
銀|金 metal + 艮 someter
駅|馬 caballo + 尺 medida
質|斤 hacha + 斤 hacha + 貝 concha
親|立 de pie + 木 árbol + 見 ver
館|飠 comida + 官 oficina
題|是 correcto + 頁 cabeza
験|馬 caballo + 僉 todos
曜|日 sol + 翟 plumas
意|音 sonido + 心 corazón
持|扌 mano + 寺 templo
答|竹 bambú + 合 unir
試|言 palabra + 式 modelo
歌|可 poder + 可 poder + 欠 bostezo
野|里 aldea + 予 yo
場|土 tierra + 昜 sol naciente
屋|尸 cuerpo + 至 llegar
風|几 vela + 虫 insecto
発|*Pies 癶 que arrancan: salir disparado
急|刍 atrapar + 心 corazón`;
const RAD5=`一|一 una línea
二|二 dos líneas
三|三 tres líneas
四|*Una ventana 囗 con las cortinas recogidas dentro
五|*Forma compuesta: memorízalo como un bloque
六|亠 tapa + 八 separar
七|*Forma compuesta: memorízalo como un bloque
八|八 dos trazos que se separan
九|*Forma compuesta: memorízalo como un bloque
十|十 una cruz
百|一 uno + 白 blanco
千|丿 trazo + 十 diez
万|*Forma compuesta: memorízalo como un bloque
円|*Forma compuesta: memorízalo como un bloque
日|日 el sol
月|月 la luna
火|火 fuego
水|水 agua
木|木 árbol
金|金 metal, oro
土|土 tierra
年|*Forma compuesta: memorízalo como un bloque
時|日 sol + 寺 templo
間|門 puerta + 日 sol
午|*Forma compuesta: memorízalo como un bloque
今|*Un techo 人 sobre algo que pasa justo ahora
毎|*Una persona sobre su madre 母: cada día
半|*Algo cortado justo por la mitad
人|人 persona
男|田 arrozal + 力 fuerza
女|女 mujer
子|子 niño
父|父 padre
母|母 madre
友|*Dos manos que se ayudan
名|夕 tarde + 口 boca
生|生 brote que crece
先|*Un pie que va delante de la persona 儿
上|*Una marca encima de la línea
下|*Una marca debajo de la línea
中|口 caja + 丨 línea
外|夕 tarde + 卜 adivinar
右|*Una mano que lleva comida a la boca 口
左|*Una mano que sostiene una herramienta 工
前|*Forma compuesta: memorízalo como un bloque
後|彳 caminar + 幺 hilo + 夂 pies
東|木 árbol + 日 sol
西|西 oeste
南|*Forma compuesta: memorízalo como un bloque
北|*Dos personas espalda con espalda
山|山 montaña
川|川 río
天|一 uno + 大 grande
気|气 vapor + メ arroz simplificado
雨|雨 lluvia
電|雨 lluvia + 电 rayo
車|車 carro
国|囗 recinto + 玉 joya
行|行 cruce de caminos
来|*Forma compuesta: memorízalo como un bloque
出|*Dos montañas 山 apiladas
入|入 entrar
見|目 ojo + 儿 persona caminando
聞|門 puerta + 耳 oreja
食|食 comer
休|亻 persona + 木 árbol
学|⺍ chispas + 冖 techo + 子 niño
校|木 árbol + 交 cruzar
語|言 palabra + 吾 yo
読|言 palabra + 売 vender
書|聿 pincel + 日 sol
話|言 palabra + 舌 lengua
本|木 árbol + 一 marca
何|亻 persona + 可 poder
大|大 persona con los brazos abiertos
小|小 pequeño
高|*Una torre alta: memorízala como un bloque
長|*El pelo largo de un anciano
白|白 blanco`;
