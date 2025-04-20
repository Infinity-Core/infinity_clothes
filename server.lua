RegisterNetEvent('infinity_clothes:saveSkin')
AddEventHandler('infinity_clothes:saveSkin', function(source, skinJson, price)
    local SourceSteamID = exports.infinity_core:GetPlayerSource(source)     
    local PlayerDatas   = exports.infinity_core:GetPlayerSession(tonumber(source))
    if tonumber(price) >= 1 and tonumber(Config.Price) >= 1 then
        if tonumber(PlayerDatas._Cash) >= tonumber(Config.Price) then
            if SourceSteamID then
                exports.infinity_core:RemoveCash(source, Config.Price)
                exports.oxmysql:prepare('UPDATE skins_players SET clothes = ? WHERE steam_identifier = ? AND charid = ?', 
                {
                    skinJson, 
                    SourceSteamID,
                    PlayerDatas._Charid
                })
            end
        end
    else
        if SourceSteamID then
            exports.oxmysql:prepare('UPDATE skins_players SET clothes = ?  WHERE steam_identifier = ? AND charid = ?', {
                skinJson, 
                SourceSteamID,
                PlayerDatas._Charid
            })
        end
    end
end)

RegisterNetEvent('infinity_clothes:getOutfit')
AddEventHandler('infinity_clothes:getOutfit', function(source)
    local SourceSteamID = exports.infinity_core:GetPlayerSource(source)    
    if SourceSteamID then
        local Outfit  = {}
        local PlayerDatas   = exports.infinity_core:GetPlayerSession(tonumber(source))
        exports.oxmysql:prepare('SELECT clothes FROM skins_players WHERE steam_identifier = ? AND charid = ?', {SourceSteamID, PlayerDatas._Charid}, function(OutfitSAVED)
            OutfitList = json.decode(OutfitSAVED)
            TriggerClientEvent('infinity_clothes:setOutfit', source, OutfitList)
        end)
    end
end)