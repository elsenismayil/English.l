
const a =[]
const b =[]
const result =[]



function randomIntFromInterval() { // min and max included 
    let word =[
        `abandon`,
        `acknowledge`,
        `acquaint`,
        `acquire`,
        `adjoin`,
        `adjust`,
        `affect`,
        `afford`,
        `aid`,
        `appeal`,
        `approve`,
        `arise`,
        `assent`,
        `assert`,
        `assign`,
        `attach`,
        `attribute`,
        `aware of`,
        `back`,
        `ban`,
        `bark`,
        `bend (bent)`,
        `besiege`,
        `blend =mix `,
        `bless`,
        `blush`,
        `bother`,
        `bounce`,
        `brake`,
        `carve`,
        `challenge`,
        `charge`,
        `cheat`,
        `chew`,
        `chin`,
        `complicate`,
        `conceal`,
        `conclude`,
        `confess`,
        `consent`,
        `contaminate`,
        `contribute`,
        `convict`,
        `correspond`,
        `cough`,
        `crack`,
        `crash`,
        `crawl`,
        `curl`,
        `curve`,
        `decay`,
        `deceive`,
        `decline`,
        `defraud`,
        `degrade`,
        `denounce`,
        `deprived of`,
        `derive`,
        `descend`,
        `deserve`,
        `despair`,
        `dig`,
        `diminish`,
        `discord`,
        `disgust`,
        `dismiss`,
        `dispatch`,
        `disrupt`,
        `distinguish`,
        `distract`,
        `dive into`,
        `donate`,
        `drizzle`,
        `drown`,
        `eliminate`,
        `embarrass`,
        `emerge`,
        `enhance`,
        `enrich`,
        `escape`,
        `estimate`,
        `evoke`,
        `exceed`,
        `exclaim`,
        `exclude`,
        `exile`,
        `expand`,
        `extend`,
        `fade`,
        `fasten`,
        `favour`,
        `fed up `,
        `fend`,
        `fetch`,
        `float`,
        `flood`,
        `fold`,
        `freeze`,
        `fulfil`,
        `gaze at`,
        `glance at`,
        `grasp`,
        `hammer`,
        `handshake`,
        `hesitate`,
        `hijack`,
        `hinder`,
        `hire`,
        `ignore`,
        `imitate`,
        `install`,
        `intend`,
        `interfere`,
        `irritate`,
        `kidnap`,
        `kneel`,
        `knit`,
        `label`,
        `launch`,
        `maintain`,
        `march`,
        `mention`,
        `migrate`,
        `misuse`,
        `multiply`,
        `nail`,
        `neglect`,
        `occur`,
        `offend`,
        `omit`,
        `overflow`,
        `overuse`,
        `owe`,
        `pale`,
        `paste`,
        `peel`,
        `perish`,
        `persuade`,
        `plunder`,
        `poison`,
        `polish`,
        `pot`,
        `pour`,
        `precede`,
        `predict`,
        `pretend`,
        `prevail`,
        `proclaim`,
        `prove`,
        `pump`,
        `purchase`,
        `queue`,
        `quote`,
        `ratify`,
        `rebel`,
        `recite`,
        `recycle`,
        `reform`,
        `regard`,
        `regret`,
        `reign`,
        `rescue`,
        `reserve`,
        `resist`,
        `restrict = limit`,
        `retain`,
        `retell`,
        `reveal`,
        `revenge`,
        `revolt`,
        `rinse`,
        `root`,
        `ruin`,
        `rush`,
        `scare`,
        `scramble`,
        `scratch`,
        `scream`,
        `seek`,
        `seize`,
        `shake (shook, shaken)`,
        `shame`,
        `shape`,
        `shave`,
        `shelter`,
        `sigh`,
        `sink (sank, sunk) `,
        `skip`,
        `slaughter`,
        `slide`,
        `slip`,
        `smash`,
        `sneeze`,
        `soar`,
        `stare at`,
        `starve`,
        `sting (stung)`,
        `stitch =sew`,
        `stumble`,
        `submit`,
        `subtract`,
        `survey`,
        `sweep (swept) `,
        `terrify`,
        `threaten`,
        `toddle`,
        `tremble`,
        `unite`,
        `unscramble`,
        `utilize`,
        `vanish`,
        `wander`,
        `whisper`,
        `wipe`,
        `worship`,
        `zoom`,

       


        

    ]

    let aze =[ 
        `tərk etmək, imtina etmək`,
        `etiraf etmək, qəbul etmək, tanımaq
        `,
        `tanış olmaq`,
        `əldə etmək, qazanmaq`,
        `birləşmək`,
        `tənzimləmək. uyğunlaşdırmaq`,
        `təsir etmək`,
        `öhdəsindən gəlmək, imkanı olmaq`,
        `kömək etmək`,
        `müraciət etmək (məhkəməyə, ...)`,
        `bəyənmək`,
        `yaranmaq, ortaya çıxmaq`,
        `razılaşmaq`,
        `təsdiqləmək, iddia etmək`,
        `təyin etmək`,
        `alışdırmaq, təhkim etmək`,
        `təyin etmək`,
        `xəbərdar, agah olmaq`,
        `dəstəkləmək, geri çəkilmək`,
        `qadağan etmək`,
        `hürmək`,
        `əymək, bükmək`,
        `əhatə etmək, mühasirəyə almaq`,
        `qarışdırmaq`,
        `xeyr-dua vermək`,
        `qızarmaq, utanmaq
        `,
        `mane olmaq, zəhlə tökmək`,
        `sıçramaq, tullanmaq
        `,
        `tormozlamaq`,
        `oymaq, cızmaq, naxış açmaq
        `,
        `yarışa çağırmaq`,
        `doldurmaq, yükləmək`,
        `dələduzluq etmək, hiylə işlətmək`,
        `çeynəmək, gövşəmək`,
        `çənə; danışmaq`,
        `mürəkkəbləşdirmək`,
        `gizlətmək`,
        `bitirmək, nəticə çıxartmaq
        `,
        `etiraf etmək (günahını)`,
        `razılaşmaq`,
        `çirkləndirmək`,
        `töhfə vermək, yardım etmək`,
        `ittiham etmək, mühakimə etmək`,
        `yazışmaq`,
        `öskürək; öskürmək`,
        `sındırmaq, şıqqıldamaq
        `,
        `qəza keçirmək`,
        `sürünmək, iməkləmək`,
        `qıvrılmaq, dalğalandırmaq`,
        `əyilmək, əymək`,
        `çürümək, zəifləmək`,
        `aldatmaq`,
        `çürümək, zəifləmək, azalmaq`,
        `aldatmaq, saxtakarlıq etmək`,
        `alçaltmaq, çürümək`,
        `qınamaq, pisləmək, əlehində olmaq`,
        `məhrum etmək`,
        `əmələ gəlmək, törətmək`,
        `enmək, düşmək, azalmaq
        `,
        `layiq olmaq, haqq etmək`,
        `ümidsiz olmaq
        `,
        `qazmaq, eşələmək`,
        `azalmaq`,
        `narazılıq; razılaşmamaq`,
        `nifrət etmək, iyrəndirmək`,
        `işdən çıxarmaq`,
        `göndərmək, yollamaq`,
        `pozmaq, korlamaq, dağıtmaq, parçalamaq`,
        `seçmək, fərqləndirmək`,
        `yayındırmaq, diqqətini dağıtmaq`,
        `suya tullanmaq`,
        `bağışlamaq, hədiyyə etmək`,
        `çiskinləmək (yüngül yağış)
        `,
        `boğmaq, boğulmaq`,
        `aradan qaldırmaq, ortadan qaldırmaq`,
        `xəcalət vermək`,
        `peyda olmaq, ortaya çıxmaq`,
        `artırmaq, yüksəltmək`,
        `zənginləşdirmək`,
        `xilas olmaq, qaçmaq`,
        `qiymətləndirmək`,
        `oyatmaq`,
        `üstün olmaq, həddini aşmaq`,
        `ucadan demək, qışqırmaq`,
        `istisna etmək`,
        `sürgün etmək`,
        `genişlətmək, böyümək`,
        `genişlətmək, uzatmaq`,
        `rəngi solmaq, gücdən düşmək`,
        `bağlamaq, bərkitmək`,
        `xeyirxahlıq etmək`,
        `bezmək`,
        `qarşını almaq, özünü qorumaq
        `,
        `gətirmək`,
        `üzmək, su üzərində durmaq`,
        `daşqın; daşmaq, su basmaq
        `,
        `qatlamaq, bükmək`,
        `dondurmaq`,
        `həyata keçirmək`,
        `baxmaq, gözünü zilləmək`,
        `nəzərdən keçirmək`,
        `möhkəm sıxmaq, tutub buraxmamaq
        `,
        `çəkic; çəkiclə vurmaq`,
        `əllə görüşmək`,
        `tərəddüd etmək`,
        `təyyarə oğurlamaq
        `,
        `mane olmaq`,
        `kirayə götürmək`,
        `önəmsəməmək, əhəmiyyət verməmək`,
        `təqlid etmək, yamsılamaq
        `,
        `qurmaq, yerləşdirmək, montaj etmək`,
        `niyyətində olmaq`,
        `qarışmaq, müdaxilə etmək`,
        `əsəbləşdirmək, qıcıqlandırmaq`,
        `adam oğurlamaq
        `,
        `diz çökmək`,
        `toxumaq`,
        `etiketləmək`,
        `başlatmaq`,
        `qoruyub saxlamaq`,
        `addımlamaq`,
        `xatırlatmaq, bəhs etmək`,
        `köç etmək`,
        `sui-istifadə etmək`,
        `vurmaq (riyazi olaraq)`,
        `dırnaq, mismar; mismarlamaq
        `,
        `məhəl qoymamaq
        `,
        `meydana gəlmək, baş vermək`,
        `incitmək, küsdürmək`,
        `ixtisar etmək`,
        `çoşmaq, daşmaq
        `,
        `həddən çox (artıq) istifadə etmək`,
        `borclu olmaq, minnətdar olmaq`,
        `solğun; solmaq`,
        `yapışdırmaq`,
        `qabığını soymaq`,
        `ölmək`,
        `inandırmaq`,
        `qarət etmək`,
        `zəhərləmək`,
        `cilalamaq, parlatmaq`,
        `qazan; konservləşdirmək`,
        `tökmək, süzmək`,
        `öncə olmaq, qabaqlamaq, öndə olmaq
        `,
        `əvvəlcədən xəbər vermək, təxmin etmək`,
        `tülkülük etmək, bəhanə etmək`,
        `qalib gəlmək`,
        `elan etmək`,
        `sübut etmək`,
        `nasoslamaq, sormaq
        `,
        `satın almaq`,
        `növbə, sıraya girmək`,
        `sitat gətirmək`,
        `təsdiq etmək`,
        `üsyan etmək`,
        `əzbərdən danışmaq
        `,
        `yenidən emal etmək`,
        `islahat aparmaq`,
        `diqqətə almaq, hörmət etmək`,
        `peşman olmaq`,
        `şahlıq etmək`,
        `qurtarmaq, xilas etmək`,
        `ehtiyata almaq`,
        `davam gətirmək, müqavimət göstərmək`,
        `məhdudlaşdırmaq`,
        `saxlamaq, tutmaq`,
        `nəql etmək, təkrar etmək`,
        `aşkar etmək`,
        `intiqam almaq`,
        `qiyam etmək, üsyan etmək`,
        `durulamaq, yaxalamaq`,
        `qaynaq, təməl, kök atmaq`,
        `dağıntı; dağıtmaq, məhv etmək`,
        `tələsmək`,
        `qorxutmaq`,
        `dırmaşmaq, sürünmək, yumurta çırpmaq`,
        `cırmaqlamaq, qaşımaq
        `,
        `bağırtı salmaq, çığırmaq`,
        `axtarmaq, araşdırmaq
        `,
        `tutmaq, yapışmaq`,
        `silkələmək`,
        `utandırmaq`,
        `forma; formalaşdırmaq
        `,
        `qırxmaq`,
        `yurd, sığınacaq; daldalanmaq, sığınmaq
        `,
        `ah çəkmək, içini çəkmək`,
        `endirmək, çökmək`,
        `sıçramaq, buraxmaq, ötürmək`,
        `qırğın törətmək`,
        `sürüşdürmək`,
        `sürüşmək`,
        `sındırmaq`,
        `asqırmaq`,
        `uçmaq, gözü göylərdə olmaq
        `,
        `gözünü zilləyərək baxmaq
        `,
        `acmaq`,
        `dişləmək, sancmaq
        `,
        `tikmək`,
        `büdrəmək, dili dolaşmaq, səhv etmək`,
        `tabe olmaq, təqdim etmək`,
        `riyazi çıxmaq`,
        `müayinə etmək, araşdırmaq`,
        `süpürmək, təmizləmək`,
        `dəhşətə gəlmək, qorxutmaq`,
        `qorxutmaq, hədələmək`,
        `ağır-ağır yerimək`,
        `əsmək, titrəmək`,
        `birləşmək, birləşdirmək`,
        `həll etmək, düzəltmək, şifrəni açmaq`,
        `istifadə etmək, faydalı hala gətirmək`,
        `yox etmək`,
        `gəzib dolaşmaq
        `,
        `pıçıltı; pıçıldamaq
        `,
        `silmək, təmizləmək`,
        `sitayiş etmək`,
        `böyütmək, yaxınlaşdırmaq`,




       


    ]
    let ozu = document.querySelector( ".ozu").value
    let second = document.querySelector(".second").value
   
    b[0]=second
    a[0]=ozu
   
    let randomu = Math.floor(Math.random()*((a[0]*1)-(b[0]*1))+(b[0])*1)
    document.querySelector(".English").innerHTML = word[randomu]
    document.querySelector(".Aze").innerHTML = aze[randomu]
    document.querySelector(".Aze").style.opacity = "0"
    console.log(aze.length,word.length)
    

  }


    function goster(){
        document.querySelector(".Aze").style.opacity = "1"
    }


  randomIntFromInterval()








  


 