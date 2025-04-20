local displayclother    = false
local cam               = nil
local c_zoom            = 2.8
local c_offset          = -0.15
skinUser                = {}

--[[ ONLY FOR REBOOT SCRIPT DEV
Citizen.CreateThread(function()
    Wait(1500)
    source      = GetPlayerServerId(PlayerId())
    exports.infinity_clothes:LoadOutfit(source)
end)
]]--

if Config.EnableCMDAll then
    RegisterCommand("skineditor", function(source, args, rawCommand)
        price = 0
        DisplayActions(not displayclother, cloth_hash_names, price, 0)
        camera(2.8, 0.4)
        launchcreator = true
        Light()
    end, false)
end

RegisterNetEvent('infinity_clothes:OpenMenuOutfit')
AddEventHandler('infinity_clothes:OpenMenuOutfit', function(source, price, firstSpawn)
    DisplayActions(not displayclother, cloth_hash_names, price, firstSpawn)
    camera(2.8, 0.4)
    launchcreator = true
    Light()
end)

function DisplayActions(bool, cloth_hash_names, price, firstSpawn)
    clothes = cloth_hash_names
    if not IsPedMale(PlayerPedId()) then
        sex = "female"
    else
        sex = "male"
    end
    displayclother    = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type   		         = "nui_content",
        status 	 	         = displayclother,
        clothes              = clothes,
        sex                  = sex,
        price                = price,
        firstSpawn           = firstSpawn
    })
end

RegisterNUICallback("exit", function(data)
    DisplayActions(false)
    launchcreator = false
    destory()
end)

RegisterNUICallback("updateskin", function(data)
    
    if data.removeclothe then
        Citizen.InvokeNative(0xD710A5007C2AC539, PlayerPedId(), tonumber(data.removeclothe), 0)
        removeClotheCat(data.removalcat)
    end
    if not data.removeclothe then
        Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(data.clothekey), false,true,true)
    end
   Citizen.InvokeNative(0x704C908E9C405136, PlayerPedId())
   Citizen.InvokeNative(0xAAB86462966168CE, PlayerPedId(), 1)
   Citizen.InvokeNative(0xCC8CA3E88256E58F, PlayerPedId(), 0, 1, 1, 1, 0)

    if data.cat == "loadouts" then
        loadouts      = data.clothekey
    elseif data.cat == "hats" then
        hats          = data.clothekey
    elseif data.cat == "cloaks" then
        cloaks        = data.clothekey
    elseif data.cat == "shirts_full" then
        shirts_full   = data.clothekey
    elseif data.cat == "boot_accessories" then
        boot_accessories = data.clothekey
    elseif data.cat == "boots" then
        boots        = data.clothekey
    elseif data.cat == "pants" then
        pants        = data.clothekey
    elseif data.cat == "coats_closed" then
        coats_closed = data.clothekey
    elseif data.cat == "badges" then
        badges = data.clothekey
    elseif data.cat == "skirts" then
        skirts = data.clothekey
    elseif data.cat == "suspenders" then
        suspenders = data.clothekey
    elseif data.cat == "holsters_left" then
        holsters_left = data.clothekey
    elseif data.cat == "belt_buckles" then
        belt_buckles = data.clothekey
    elseif data.cat == "belts" then
        belts = data.clothekey
    elseif data.cat == "gunbelts" then
        gunbelts = data.clothekey
    elseif data.cat == "neckties" then
        neckties = data.clothekey
    elseif data.cat == "coats" then
        coats = data.clothekey
    elseif data.cat == "ponchos" then
        ponchos = data.clothekey
    elseif data.cat == "satchels" then
        satchels = data.clothekey
    elseif data.cat == "armor" then
        armor = data.clothekey
    elseif data.cat == "eyewear" then
        eyewear = data.clothekey
    elseif data.cat == "gloves" then
        gloves = data.clothekey
    elseif data.cat == "gauntlets" then
        gauntlets = data.clothekey
    elseif data.cat == "chaps" then
        chaps = data.clothekey
    elseif data.cat == "vests" then
        vests = data.clothekey
    elseif data.cat == "masks" then
        masks = data.clothekey
    elseif data.cat == "spats" then
        spats = data.clothekey
    elseif data.cat == "neckwear" then
        neckwear = data.clothekey
    elseif data.cat == "accessories" then
        accessories = data.clothekey
    elseif data.cat == "jewelry_bracelets" then
        jewelry_bracelets = data.clothekey
    end
end)

function removeClotheCat(catareremoved)

    --print('cat removed', catareremoved)

    if catareremoved == "loadouts" then
        loadouts      = nil
    elseif catareremoved == "hats" then
        hats          = nil
    elseif catareremoved == "cloaks" then
        cloaks        = nil
    elseif catareremoved == "shirts_full" then
        shirts_full   = nil
    elseif catareremoved == "boot_accessories" then
        boot_accessories = nil
    elseif catareremoved == "boots" then
        boots        = nil
    elseif catareremoved == "pants" then
        pants        = nil
    elseif catareremoved == "coats_closed" then
        coats_closed = nil
    elseif catareremoved == "badges" then
        badges = nil
    elseif catareremoved == "skirts" then
        skirts = nil
    elseif catareremoved == "suspenders" then
        suspenders = nil
    elseif catareremoved == "holsters_left" then
        holsters_left = nil
    elseif catareremoved == "belt_buckles" then
        belt_buckles = nil
    elseif catareremoved == "belts" then
        belts = nil
    elseif catareremoved == "gunbelts" then
        gunbelts = nil
    elseif catareremoved == "neckties" then
        neckties = nil
    elseif catareremoved == "coats" then
        coats = nil
    elseif catareremoved == "ponchos" then
        ponchos = nil
    elseif catareremoved == "satchels" then
        satchels = nil
    elseif catareremoved == "armor" then
        armor = nil
    elseif catareremoved == "eyewear" then
        eyewear = nil
    elseif catareremoved == "gloves" then
        gloves = nil
    elseif catareremoved == "gauntlets" then
        gauntlets = nil
    elseif catareremoved == "chaps" then
        chaps = nil
    elseif catareremoved == "vests" then
        vests = nil
    elseif catareremoved == "masks" then
        masks = nil
    elseif catareremoved == "spats" then
        spats = nil
    elseif catareremoved == "neckwear" then
        neckwear = nil
    elseif catareremoved == "accessories" then
        accessories = nil
    elseif catareremoved == "jewelry_bracelets" then
        jewelry_bracelets = nil
    end

end

RegisterNUICallback("saveclothes", function(data)

        skinUser    = {}

        table.insert(skinUser,
        { 
            loadouts             = loadouts,
            hats                 = hats,
            cloaks               = cloaks,
            shirts_full          = shirts_full,
            boot_accessories     = boot_accessories,
            boots                = boots,
            pants                = pants,
            coats_closed         = coats_closed,
            badges               = badges,
            skirts               = skirts,
            suspenders           = suspenders,
            holsters_left        = holsters_left,
            belt_buckles         = belt_buckles,
            belts                = belts,
            gunbelts             = gunbelts,
            neckties             = neckties,
            coats                = coats,
            ponchos              = ponchos,
            satchels             = satchels,
            armor                = armor,
            eyewear              = eyewear,
            gloves               = gloves,
            gauntlets            = gauntlets,
            chaps                = chaps,
            vests                = vests,
            masks                = masks,
            spats                = spats,
            neckwear             = neckwear,
            accessories          = accessories,
            jewelry_bracelets    = jewelry_bracelets
        }
    )
    SkinJsonStorage = json.encode(skinUser)
    source      = GetPlayerServerId(PlayerId())

    if tonumber(data.price) == 0 and firstSpawn ~= 1 then
        exports.infinity_core:notification(source , 'Outfit Saved', 'Your clothes is now saved !', 'center_right', 'redm_min', 1600)
    else 
        if tonumber(Config.Price) >= 1 then
            exports.infinity_core:notification(source , 'Clothes Buyed', 'Your closes are now saved for '..Config.Price..'$', 'center_right', 'redm_min', 1600)
            PlaySoundFrontend("PURCHASE", "Ledger_Sounds", true, 0)
        else
            exports.infinity_core:notification(source , 'Outfit Saved', 'Your clothes is now saved !', 'center_right', 'redm_min', 1600)
        end
    end
    TriggerServerEvent('infinity_clothes:saveSkin', source, SkinJsonStorage, data.price)

end)

RegisterNetEvent('infinity_clothes:setOutfit')
AddEventHandler('infinity_clothes:setOutfit', function(OutfitPlayer)

   if OutfitPlayer ~= nil then
    for i, key in ipairs(OutfitPlayer) do
        if key.loadouts then
            loadouts = key.loadouts
        end
        if key.hats then
            hats = key.hats
        end
        if key.cloaks then
            cloaks = key.cloaks
        end
        if key.shirts_full then
            shirts_full = key.shirts_full
        end
        if key.boot_accessories then
            boot_accessories = key.boot_accessories
        end
        if key.boots then
            boots = key.boots
        end
        if key.pants then
            pants = key.pants
        end
        if key.hats then
            hats = key.hats
        end
        if key.coats_closed then
            coats_closed = key.coats_closed
        end
        if key.badges then
            badges = key.badges
        end
        if key.skirts then
            skirts = key.skirts
        end
        if key.suspenders then
            suspenders = key.suspenders
        end
        if key.holsters_left then
            holsters_left = key.holsters_left
        end
        if key.belt_buckles then
            belt_buckles = key.belt_buckles
        end
        if key.belts then
            belts = key.belts
        end
        if key.gunbelts then
            gunbelts = key.gunbelts
        end
        if key.neckties then
            neckties = key.neckties
        end
        if key.coats then
            coats = key.coats
        end
        if key.ponchos then
            ponchos = key.ponchos
        end
        if key.satchels then
            satchels = key.satchels
        end
        if key.armor then
            armor = key.armor
        end
        if key.eyewear then
            eyewear = key.eyewear
        end
        if key.gloves then
            gloves = key.gloves
        end
        if key.gauntlets then
            gauntlets = key.gauntlets
        end
        if key.chaps then
            chaps = key.chaps
        end
        if key.vests then
            vests = key.vests
        end
        if key.masks then
            masks = key.masks
        end
        if key.spats then
            spats = key.spats
        end
        if key.neckwear then
            neckwear = key.neckwear
        end
        if key.accessories then
            accessories = key.accessories
        end
        if key.jewelry_bracelets then
            jewelry_bracelets = key.jewelry_bracelets
        end
    end

    skinUser    = {}
    table.insert(skinUser,
        { 
            loadouts             = loadouts,
            hats                 = hats,
            cloaks               = cloaks,
            shirts_full          = shirts_full,
            boot_accessories     = boot_accessories,
            boots                = boots,
            pants                = pants,
            coats_closed         = coats_closed,
            badges               = badges,
            skirts               = skirts,
            suspenders           = suspenders,
            holsters_left        = holsters_left,
            belt_buckles         = belt_buckles,
            belts                = belts,
            gunbelts             = gunbelts,
            neckties             = neckties,
            coats                = coats,
            ponchos              = ponchos,
            satchels             = satchels,
            armor                = armor,
            eyewear              = eyewear,
            gloves               = gloves,
            gauntlets            = gauntlets,
            chaps                = chaps,
            vests                = vests,
            masks                = masks,
            spats                = spats,
            neckwear             = neckwear,
            accessories          = accessories,
            jewelry_bracelets    = jewelry_bracelets
        }
    )
    SkinJsonStorage = json.encode(skinUser)
    --print("[^4 [CLOTHES] Loading Player Outfit...]")
    Wait(1500)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(loadouts), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(hats), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(cloaks), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(shirts_full), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(boot_accessories), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(boots), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(pants), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(coats_closed), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(badges), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(skirts), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(suspenders), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(holsters_left), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(belt_buckles), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(belts), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(gunbelts), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(neckties), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(coats), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(ponchos), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(satchels), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(armor), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(eyewear), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(gloves), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(gauntlets), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(chaps), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(vests), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(masks), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(spats), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(neckwear), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(accessories), false,true,true)
    Citizen.InvokeNative(0xD3A7B003ED343FD9, PlayerPedId(), tonumber(jewelry_bracelets), false,true,true)
    Citizen.InvokeNative(0x704C908E9C405136, PlayerPedId())
    Citizen.InvokeNative(0xAAB86462966168CE, PlayerPedId(), 1)
    Citizen.InvokeNative(0xCC8CA3E88256E58F, PlayerPedId(), 0, 1, 1, 1, 0)
end
end)

local headingss = -35.00
RegisterNUICallback('heading', function(data)
    local playerPed = PlayerPedId()
    headingss = headingss + data.value
    SetEntityHeading(playerPed, headingss)
end)
RegisterNUICallback('defcam', function(data)
    camera(2.8,-0.15)
    c_zoom = 2.8
    c_offset = -0.15
end)
RegisterNUICallback('camera', function(data)
    if data.zoom ~= nil then
        if c_zoom + data.zoom < 2.8 and  c_zoom + data.zoom > 0.7 then
            c_zoom = c_zoom + data.zoom
        end
    end
    if data.offset ~= nil then
        if  c_offset + data.offset < 1.2 and  c_offset + data.offset > -1.0 then
            c_offset = c_offset + data.offset
        end
    end
    camera(c_zoom ,c_offset)
end)
function Light()
    while launchcreator do
        Wait(1)
        local playerPed = PlayerPedId()
        local coords = GetEntityCoords(playerPed)
        DrawLightWithRange(coords.x+1 , coords.y+1 , coords.z + 1, 255, 255, 255, 5.0 ,10.0)
    end
end
function destory()
    SetCamActive(cam, false)
    RenderScriptCams(false, true, 500, true, true)
    DestroyAllCams(true)
    cam = nil
end
function camera(zoom, offset)
    DestroyAllCams(true)
    local playerPed = PlayerPedId()
    local coords    = GetEntityCoords(playerPed)
    local heading = 45.0
    local zoomOffset = zoom
    local camOffset = offset
    local angle = heading * math.pi / 180.0
    local theta = {
        x = math.cos(angle),
        y = math.sin(angle)
    }
    local pos = {
        x = coords.x + (zoomOffset * theta.x),
        y = coords.y + (zoomOffset * theta.y)
    }
    local angleToLook = heading - 140.0
    if angleToLook > 360 then
        angleToLook = angleToLook - 360
    elseif angleToLook < 0 then
        angleToLook = angleToLook + 360
    end
    angleToLook = angleToLook * math.pi / 180.0
    local thetaToLook = {
        x = math.cos(angleToLook),
        y = math.sin(angleToLook)
    }
    local posToLook = {
        x = coords.x + (zoomOffset * thetaToLook.x),
        y = coords.y + (zoomOffset * thetaToLook.y)
    }
    local add = (0.8*zoom)
    SetEntityHeading(playerPed, headingss)
    cam = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", pos.x, pos.y, coords.z + camOffset, 300.00,0.00,0.00, 40.00, false, 0)
    PointCamAtCoord(cam, posToLook.x-add, posToLook.y, coords.z + camOffset)
    SetCamActive(cam, true)
    RenderScriptCams(true, true, 500, true, true)
end
function LoadOutfit()
    source      = GetPlayerServerId(PlayerId())
    TriggerServerEvent('infinity_clothes:getOutfit', source)
end