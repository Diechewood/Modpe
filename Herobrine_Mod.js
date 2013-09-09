function useItem(x,y,z,itemId,blockId,side)
{
        if(itemId==259&&blockId==57)
        {
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 278, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
                clientMessage("!!!!EID LLIW UOY");
                setNightMode(14500);

        }
        else if(blockId==24&&itemId==259)
        {
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                spawnPigZombie(x, y, z, 292, "mob/NotchBrine.png");
                clientMessage("I WANT YOU OUT OF MY GAME");
                setNightMode(14500);
        }
        else if(itemId==259&&blockId==4)
        {
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                spawnPigZombie(x, y, z, 294, "mob/EJeb.png");
                clientMessage("I WANT YOU OUT");
                setNightMode(14500);
               
        }

}
