onEvent('item.registry', event => {
	// Register new items here
	event.create('ftbai:gold_coin').displayName('金币')
	event.create('ftbai:silver_coin').displayName('银币')
    event.create('ftbai:tuff_chunk').displayName('凝灰岩块')
    event.create('ftbai:andesite_chunk').displayName('安山岩块')
    event.create('ftbai:diorite_chunk').displayName('闪长岩块')
    event.create('ftbai:soil').displayName('土团')
    event.create('ftbai:lexxiegrimoire').displayName(`莱克西的魔法书`)
    event.create('ftbai:fools_gold_ingot').displayName('愚人金锭')
    event.create('ftbai:fools_gold_nugget').displayName('愚人金粒')
    event.create('ftbai:codex_bloodmagic', "music_disc").displayName(`血魔法之典`).song('ftbai:saereth').analogOutput(2)
    event.create('ftbai:codex_arsnouveau', "music_disc").displayName(`新生魔艺之典`).song('ftbai:r3gen').analogOutput(3)
    event.create('ftbai:codex_botania', "music_disc").displayName(`植物魔法之典`).song('ftbai:ladymayhaem').analogOutput(4)
    event.create('ftbai:codex_evilcraft', "music_disc").displayName(`邪恶工艺之典`).song('ftbai:aaronhowser1').analogOutput(5)
    event.create('ftbai:codex_hexcasting').displayName(`咒法学之典`)
    event.create('ftbai:codex_malum', "music_disc").displayName(`灵灾之典`).song('ftbai:loneztar').analogOutput(6)
    event.create('ftbai:codex_occultism', "music_disc").displayName(`神秘学之典`).song('ftbai:everlipse').analogOutput(7)
    event.create('ftbai:codex_goblin', "music_disc").displayName(`哥布林之典`).song('ftbai:goblins').analogOutput(8)
    event.create('ftbai:codex_final', "music_disc").displayName(`最终之典`).song('ftbai:backstory').analogOutput(9)
    event.create('ftbai:lexxies_charm', "music_disc").displayName(`莱克西的护符`).song('ftbai:lady_lexxie').analogOutput(10)
    event.create('ftbai:wooden_bucket').displayName(`木桶`)
    event.create('ftbai:source_coal').displayName(`魔源煤炭`).burnTime(4800)

})


