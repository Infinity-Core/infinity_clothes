---
-- [[ BLIPS ]]
---
if Config.BlipsMap then
    Citizen.CreateThread(function()
        for _, info in pairs(Config.Shops) do
            local blip = N_0x554d9d53f696d002(1664425300, info.x, info.y, info.z)
            SetBlipSprite(blip, info.sprite, 1)
            SetBlipScale(blip, 0.2)
            Citizen.InvokeNative(0x9CB1A1623062F402, blip, info.Name)
        end  
    end)
end

---
-- [[ INTERACT ]]
---
local HasAlreadyEnteredMarker   = false
local Timer                     = 4000
local notificationSend          = false
Citizen.CreateThread(function()
    _InfinitySource = GetPlayerServerId(PlayerId())
    while true do
		Citizen.Wait(Timer)
        click               = false
		local playerPed     = PlayerPedId()
		local coords        = GetEntityCoords(playerPed)
        local TypeZone      = nil
        local IsInMarker    = false
        for _, clother in pairs(Config.Shops) do
            if GetDistanceBetweenCoords(coords, clother.x, clother.y,  clother.z, true) <= Config.Distance then
                IsInMarker  = true
                Timer       = 8
                if not notificationSend then
                    PlaySoundFrontend("Give_Item_Enter", "HUD_Donate_Sounds", true, 0)
                    exports.infinity_core:notification(_InfinitySource , '<div class="text-warning">Clothes Store</div>','<small style="font-size:20px;">Press Enter Key</small>', 'center_left', 'infinitycore', 2500)
                    notificationSend = true
                end
                if IsControlJustPressed(2, Config.KeyOpenMenu) and not click then
                    click = true
                    TriggerEvent("infinity_clothes:OpenMenuOutfit", _InfinitySource, 6.50, 0)
                end
            end
        end
        if IsInMarker and not HasAlreadyEnteredMarker then
			HasAlreadyEnteredMarker = true
		end
        if not IsInMarker and HasAlreadyEnteredMarker then
			Timer = 4000
			HasAlreadyEnteredMarker = false
            notificationSend = false
		end
	end
end)