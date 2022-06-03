# 4e-easy-effects
A Foundry VTT module porting some of the Pathfinder 2e system's QoL to 4e.

Credits for most of the code used goes to the [PF2e System Developers](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/). This code has been used under accordance of their [license](https://gitlab.com/hooking/foundry-vtt---pathfinder-2e/-/blob/master/LICENSE).

## Features

### Easy Item Drag&Drop
You can now easily drag items from the menu to a PC or NPC token and it will be added to their sheet.

### Effects Panel + Effect Items
![2022-06-03 12_30_52-Window](https://user-images.githubusercontent.com/25153170/171837807-74227ea3-3420-41fd-9aa6-33642a5e6624.png)

Whenever you add an Item to an actor and it has '[Effect]' in its name, it will show up in the Effects Panel on the top right of the screen whenever their token is selected, next to the normal menu. From where you can easily delete said Item by right clicking on it.

This can be useful for creating preset Items containing buff&debuff effects for certain powers and put them in the description of powers. This way you can easily drop them onto a token whenever it should be applied and remove it when neccesary. I recommend adding Temporary effects on these items instead of others because that way they also show up on the Token itself for others to see.

## Disclaimer
This was the first time I used normal Javascript in ~3 years and I have never created a Foundry module before. So the code is messy and I doubt it is as efficient as can be. Anyhow I don't think the performance impact is big.
