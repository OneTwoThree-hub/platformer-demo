// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104010101010101010101010101010101010101010401010101010101010101010101010101010101040101010101010101010101010101010101010103010101010101010101010101010101010202010202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles13,sprites.builtin.forestTiles9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
