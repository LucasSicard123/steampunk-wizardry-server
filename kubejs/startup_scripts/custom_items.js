// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// let music_list = {
//     golden: 194
// };

// StartupEvents.registry('sound_event', event => {
//     Object.keys(music_list).forEach(key => {
//         event.create(`music.${key}`)
//     })
// })

StartupEvents.registry('item', event => {
    event.create('emerald_nugget')
})

// StartupEvents.registry('item', event => {
//     Object.keys(music_list).forEach((key) => {
//         let value = music_list[key]
//         event.create(`music_disc_${key}`, "music_disc")
//             .song(`kubejs:music.${key}`, value)
//             .displayName("Music Disc")
//             .texture(`kubejs:item/music_disc_${key}`)
//             .tag("music_discs")
//             .translationKey(`item.kubejs.music_disc_${key}`)
//     })
// })
