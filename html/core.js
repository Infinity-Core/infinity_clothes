$(function () {
    document.getElementById("nui_content").style.display = "none";
    window.addEventListener('message', function(event) {

        let item    = event.data;
        let clothes = item.clothes;
        let sex     = item.sex;
        let price   = item.price;
        let firstSpawn = item.firstSpawn;

        if (item.type === "nui_content") {
            if (item.status == true) {
                document.getElementById("nui_content").style.display = "block";
                Menus();

                $("#reset").html('');
                $("#back").hide();
                $("#formsearch").hide();
                $("#catname").html('');

                ClearOutfitsList();
                function Menus(){
                    $("#tab_name").html('CLOTHES');
                        $("#menus").html(`
                        <div class="col-lg-6 open_menu" id="open_shirts_full">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Shirts</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_pants">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Pants</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_coats">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Coats closed</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_boots">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Boots</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_bootaccessories">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Boots accessories</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_cloaks">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Cloaks</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_hats">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Hats</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_loadouts">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Loadouts</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_badges">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Badges</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_chaps">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Chaps</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_vests">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Vests</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_masks">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Maks</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_spats">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Spats</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_neckwear">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Neckwear</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_accessories">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Accessories</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 open_menu" id="open_gauntlets">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Gauntlets</span></p>
                                </div>
                            </div>
                        </div>       
                        <div class="col-lg-6 open_menu" id="open_gloves">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Gloves</span></p>
                                </div>
                            </div>
                        </div>        
                        <div class="col-lg-6 open_menu" id="open_eyewear">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Eyewear</span></p>
                                </div>
                            </div>
                        </div>      
                        <div class="col-lg-6 open_menu" id="open_armor">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Armor</span></p>
                                </div>
                            </div>
                        </div>          
                        <div class="col-lg-6 open_menu" id="open_satchels">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Satchels</span></p>
                                </div>
                            </div>
                        </div>          
                        <div class="col-lg-6 open_menu" id="open_ponchos">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Ponchos</span></p>
                                </div>
                            </div>
                        </div>     
                        <div class="col-lg-6 open_menu" id="open_coatsclosed">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Coats open</span></p>
                                </div>
                            </div>
                        </div>     
                        <div class="col-lg-6 open_menu" id="open_neckties">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Neckties</span></p>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-6 open_menu" id="open_gunbelts">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Gunbelts</span></p>
                                </div>
                            </div>
                        </div>    
                        <div class="col-lg-6 open_menu" id="open_belts">
                            <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Belts</span></p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg-6 open_menu" id="open_belt_buckles">
                        <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Belts buckles</span></p>
                                </div>
                            </div>
                        </div>        
                        <div class="col-lg-6 open_menu" id="open_holsters_left">
                        <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Holsters left</span></p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg-6 open_menu" id="open_jewelry_bracelets">
                        <div class="cat_block d-flex flex-column rounded-1">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Jewelry bracelets</span></p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg-6 open_menu" id="open_suspenders">
                        <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Suspenders</span></p>
                                </div>
                            </div>
                        </div>                                  
                        <div class="col-lg-6 open_menu" id="open_skirts">
                        <div class="cat_block d-flex flex-column rounded-1 ">
                                <div class="trader_case01 d-flex m-auto">
                                    <p class="my-auto mx-auto tradename"><span>Skirts</span></p>
                                </div>
                            </div>
                        </div>      
                    `);
                }

                function ClearOutfitsList(){
                    $("#boots").hide();
                    $("#coats_closed").hide();
                    $("#pants").hide();
                    $("#hats").hide();
                    $("#cloaks").hide();
                    $("#loadouts").hide();
                    $("#badges").hide();
                    $("#chaps").hide();
                    $("#vests").hide();
                    $("#masks").hide();

                    $("#coatsopened").hide();
                    $("#boot_accessories").hide();
                    $("#shirts_full").hide();

                    
                    $("#spats").hide();
                    $("#neckwear").hide();
                    $("#accessories").hide();
                    $("#gauntlets").hide();
                    $("#gloves").hide();
                    $("#eyewear").hide();
                    $("#armor").hide();
                    $("#satchels").hide();
                    $("#ponchos").hide();
                    $("#coatsclosed").hide();
                    $("#neckties").hide();
                    $("#gunbelts").hide();
                    $("#belts").hide();
                    $("#belt_buckles").hide();
                    $("#holsters_left").hide();
                    $("#jewelry_bracelets").hide();
                    $("#suspenders").hide();
                    $("#skirts").hide();
                    $("#reset").html('');
                    $("#coats_closed").html('');
                    $("#boots").html('');
                    $("#pants").html('');
                    $("#boot_accessories").html('');
                    $("#shirts_full").html('');
                    $("#hats").html('');
                    $("#cloaks").html('');
                    $("#loadouts").html('');
                    $("#badges").html('');
                    $("#chaps").html('');
                    $("#vests").html('');
                    $("#masks").html('');
                    $("#spats").html('');
                    $("#neckwear").html('');
                    $("#accessories").html('');
                    $("#gauntlets").html('');
                    $("#gloves").html('');
                    $("#eyewear").html('');
                    $("#armor").html('');
                    $("#satchels").html('');
                    $("#ponchos").html('');
                    $("#coatsclosed").html('');
                    $("#coatsopened").html('');
                    $("#neckties").html('');
                    $("#gunbelts").html('');
                    $("#belts").html('');
                    $("#belt_buckles").html('');
                    $("#holsters_left").html('');
                    $("#jewelry_bracelets").html('');
                    $("#suspenders").html('');
                    $("#skirts").html('');
                }   
                function back(){
                    $("#reset").html('');
                    $("#catname").html('');
                    $("#tab_name").html('CLOTHES');
                    ClearOutfitsList()
                    $("#menus").show();
                    $("#back").hide();
                    $("#formsearch").hide();
                }
                function globalMenu(tabname, catname){
                    $("#tab_name").html(tabname);
                    $("#catname").html(catname);
                    $("#back").show();
                    $("#formsearch").show();
                    $("#menus").hide();
                }
                $('#back').unbind('click').click(function(){
                    back();
                })
                /// ALL OUTFITS DATAS /// skirts
                $('#open_skirts').unbind('click').click(function(){
                    $("#skirts").show();
                    let id_categoryhtml = "#skirts"
                    let id_categoryhash = "skirts"
                    let category_hash   = 0xA0E3AB7F;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('skirts', id_categoryhash)
                })
                $('#open_suspenders').unbind('click').click(function(){
                    $("#suspenders").show();
                    let id_categoryhtml = "#suspenders"
                    let id_categoryhash = "suspenders"
                    let category_hash   = 0x877A2CF7;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Suspenders', id_categoryhash)
                })
                $('#open_holsters_left').unbind('click').click(function(){
                    $("#holsters_left").show();
                    let id_categoryhtml = "#holsters_left"
                    let id_categoryhash = "holsters_left"
                    let category_hash   = 0xB6B6122D;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Holsters left', id_categoryhash)
                })
                $('#open_jewelry_bracelets').unbind('click').click(function(){
                    $("#jewelry_bracelets").show();
                    let id_categoryhtml = "#jewelry_bracelets"
                    let id_categoryhash = "jewelry_bracelets"
                    let category_hash   = 0x7BC10759;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Jewelry Bracelets', id_categoryhash)
                })
                $('#open_belt_buckles').unbind('click').click(function(){
                    $("#belt_buckles").show();
                    let id_categoryhtml = "#belt_buckles"
                    let id_categoryhash = "belt_buckles"
                    let category_hash   = 0xFAE9107F;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Belt Buckles', id_categoryhash)
                })
                $('#open_belts').unbind('click').click(function(){
                    $("#belts").show();
                    let id_categoryhtml = "#belts"
                    let id_categoryhash = "belts"
                    let category_hash   = 0xA6D134C6;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Belts', id_categoryhash)
                })
                $('#open_gunbelts').unbind('click').click(function(){
                    $("#gunbelts").show();
                    let id_categoryhtml = "#gunbelts"
                    let id_categoryhash = "gunbelts"
                    let category_hash   = 0x9B2C8B89;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Gunbelts', id_categoryhash)
                })
                $('#open_neckties').unbind('click').click(function(){
                    $("#neckties").show();
                    let id_categoryhtml = "#neckties"
                    let id_categoryhash = "neckties"
                    let category_hash   = 0x7A96FACA;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Neckties', id_categoryhash)
                })
                $('#open_coatsclosed').unbind('click').click(function(){
                    $("#coatsopened").show();
                    let id_categoryhtml = "#coatsopened"
                    let id_categoryhash = "coats"
                    let category_hash   = 0x0662AC34;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Coats Opened', id_categoryhash)
                })
                $('#open_ponchos').unbind('click').click(function(){
                    $("#ponchos").show();
                    let id_categoryhtml = "#ponchos"
                    let id_categoryhash = "ponchos"
                    let category_hash   = 0xAF14310B;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Ponchos', id_categoryhash)
                })
                $('#open_satchels').unbind('click').click(function(){
                    $("#satchels").show();
                    let id_categoryhtml = "#satchels"
                    let id_categoryhash = "satchels"
                    let category_hash   = 0x94504D26;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Satchels', id_categoryhash)
                })
                $('#open_armor').unbind('click').click(function(){
                    $("#armor").show();
                    let id_categoryhtml = "#armor"
                    let id_categoryhash = "armor"
                    let category_hash   = 0x72E6EF74;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Armor', id_categoryhash)
                })
                $('#open_eyewear').unbind('click').click(function(){
                    $("#eyewear").show();
                    let id_categoryhtml = "#eyewear"
                    let id_categoryhash = "eyewear"
                    let category_hash   = 0x05E47CA6;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Eyewear', id_categoryhash)
                })
                $('#open_gloves').unbind('click').click(function(){
                    $("#gloves").show();
                    let id_categoryhtml = "#gloves"
                    let id_categoryhash = "gloves"
                    let category_hash   = 0xEABE0032;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Gloves', id_categoryhash)
                })
                $('#open_gauntlets').unbind('click').click(function(){
                    $("#gauntlets").show();
                    let id_categoryhtml = "#gauntlets"
                    let id_categoryhash = "gauntlets"
                    let category_hash   = 0x91CE9B20;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Gauntlets', id_categoryhash)
                })
                $('#open_coats').unbind('click').click(function(){
                    $("#coats_closed").show();
                    let id_categoryhtml = "#coats_closed"
                    let id_categoryhash = "coats_closed"
                    let category_hash   = 0x0662AC34;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Coats Opened', id_categoryhash)
                })
                $('#open_pants').unbind('click').click(function(){
                    $("#pants").show();
                    let id_categoryhtml = "#pants"
                    let id_categoryhash = "pants"
                    let category_hash   = 0x1D4C528A;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Pants', id_categoryhash)
                })
                $('#open_boots').unbind('click').click(function(){
                    $("#boots").show();
                    let id_categoryhtml = "#boots"
                    let id_categoryhash = "boots"
                    let category_hash   = 0x777EC6EF;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Boots', id_categoryhash)
                })
                $('#open_bootaccessories').unbind('click').click(function(){
                    $("#boot_accessories").show();
                    let id_categoryhtml = "#boot_accessories"
                    let id_categoryhash = "boot_accessories"
                    let category_hash   = 0x18729F39;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Boots', id_categoryhash)
                })
                $('#open_shirts_full').unbind('click').click(function(){
                    $("#shirts_full").show();
                    let id_categoryhtml = "#shirts_full"
                    let id_categoryhash = "shirts_full"
                    let category_hash   = 0x2026C46D;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Shirts', id_categoryhash)
                })
                $('#open_cloaks').unbind('click').click(function(){
                    $("#cloaks").show();
                    let id_categoryhtml = "#cloaks"
                    let id_categoryhash = "cloaks"
                    let category_hash   = 0x3C1A74CD;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Cloaks', id_categoryhash)
                })
                $('#open_hats').unbind('click').click(function(){
                    $("#hats").show();
                    let id_categoryhtml = "#hats"
                    let id_categoryhash = "hats"
                    let category_hash   = 0x9925C067;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Hats', id_categoryhash)
                })
                $('#open_loadouts').unbind('click').click(function(){
                    $("#loadouts").show();
                    let id_categoryhtml = "#loadouts"
                    let id_categoryhash = "loadouts"
                    let category_hash   = 0x83887E88;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Loadouts', id_categoryhash)
                })
                $('#open_badges').unbind('click').click(function(){
                    $("#badges").show();
                    let id_categoryhtml = "#badges"
                    let id_categoryhash = "badges"
                    let category_hash   = 0x3F7F3587;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Badges', id_categoryhash)
                })
                $('#open_chaps').unbind('click').click(function(){
                    $("#chaps").show();
                    let id_categoryhtml = "#chaps"
                    let id_categoryhash = "chaps"
                    let category_hash   = 0x3107499B;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Chaps', id_categoryhash)
                })     
                $('#open_vests').unbind('click').click(function(){
                    $("#vests").show();
                    let id_categoryhtml = "#vests"
                    let id_categoryhash = "vests"
                    let category_hash   = 0x485EE834;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Vests', id_categoryhash)
                })   
                $('#open_masks').unbind('click').click(function(){
                    $("#masks").show();
                    let id_categoryhtml = "#masks"
                    let id_categoryhash = "masks"
                    let category_hash   = 0x7505EF42;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Masks', id_categoryhash)
                })   
                $('#open_spats').unbind('click').click(function(){
                    $("#spats").show();
                    let id_categoryhtml = "#spats"
                    let id_categoryhash = "spats"
                    let category_hash   = 0x514ADCEA;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Spats', id_categoryhash)
                })       
                $('#open_neckwear').unbind('click').click(function(){
                    $("#neckwear").show();
                    let id_categoryhtml = "#neckwear"
                    let id_categoryhash = "neckwear"
                    let category_hash   = 0x5FC29285;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Neckwear', id_categoryhash)
                })    
                $('#open_accessories').unbind('click').click(function(){
                    $("#accessories").show();
                    let id_categoryhtml = "#accessories"
                    let id_categoryhash = "accessories"
                    let category_hash   = 0x18729F39;
                    opendatas(id_categoryhtml, id_categoryhash, category_hash);
                    globalMenu('Accessories', id_categoryhash)
                })  

                /// ALL OUTFITS DATAS ///
                function opendatas(id_categoryhtml, id_categoryhash, category_hash){
                    i=0;
                 
                    if(category_hash){
                        $("#reset").html('');
                        $('#reset').append(`<span id="reseter" data-cat="`+category_hash+`"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                      </svg> RESET</span>`);   
                    }

                    for (itemSingle in clothes) {
                        i++;
                        if(clothes[itemSingle].category_hashname == id_categoryhash && clothes[itemSingle].ped_type == sex){
                            i++;
                            $(id_categoryhtml).append(`
                                <div class="col-lg-3 caseeffect">
                                    <div class="change cat_block" data-cat="`+id_categoryhash+`" data-keysign="`+clothes[itemSingle].hash_dec_signed+`">
                                    Apply <span class="idskin">`+i+`</span><div><small>`+clothes[itemSingle].hash_dec_signed+`</small></div>
                                    </div>
                                </div>
                            `);
                        }
                    }

                    $('.change').unbind('click').click(function(){
                        let click          = document.getElementById(this.id);
                        let clothekey      = $(this).data('keysign');
                        let cat            = $(this).data('cat');
                        jQuery.post(`https://${GetParentResourceName()}/updateskin`, JSON.stringify({
                            cat       : cat,
                            clothekey : clothekey
                        }));
                        return
                    })


                    $('#reseter').unbind('click').click(function(){
                        let click               = document.getElementById(this.id);
                        let removeclothe        = $(this).data('cat');
                        let removalcat          = $("#catname").html();
       
                        jQuery.post(`https://${GetParentResourceName()}/updateskin`, JSON.stringify({
                            removeclothe : removeclothe,
                            removalcat   : removalcat
                        }));
                        return
                    })
                }

                $('#save_outfit').unbind('click').click(function(){
                    jQuery.post(`https://${GetParentResourceName()}/saveclothes`, JSON.stringify({
                        price      : price,
                        firstSpawn : firstSpawn
                    }));
                    on_back();
                    document.getElementById("nui_content").style.display = "none";
                    jQuery.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({}));
                    return
                })

            }
        }
    });

    function on_back(){
        $("#tab_name").html('CLOTHES');
        $("#catname").html('');
        $("#menus").show();
        $("#back").hide();
        $("#reset").html('');
        $("#formsearch").hide();
    }

    document.onkeyup = function (data) {
        if (data.which == 27) {
            on_back();
            document.getElementById("nui_content").style.display = "none";
            jQuery.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({}));
            return
        }
    };
    
    $(document).keypress(function(e) {
        if (e.which == 113) { // Q pressed
            $.post('https://infinity_clothes/heading', JSON.stringify({
                value: -10
            }));
        }
        if (e.which == 120) { // x pressed
            $.post('https://infinity_clothes/defcam');
        }
        if (e.which == 101) { // E pressed
            $.post('https://infinity_clothes/heading', JSON.stringify({
                value: 10
            }));
        }
        if (e.which == 119) { // w pressed
            $.post('https://infinity_clothes/camera', JSON.stringify({
                offset: 0.05
            }));
        }
        if (e.which == 115) { // s pressed 
            $.post('https://infinity_clothes/camera', JSON.stringify({
                offset: -0.05
            }));
        }
        if (e.which == 97) { // a pressed
            $.post('https://infinity_clothes/camera', JSON.stringify({
                zoom: 0.05
            }));
        }
        if (e.which == 100) { // d pressed
            $.post('https://infinity_clothes/camera', JSON.stringify({
                zoom: -0.05
            }));
        }
    });

});