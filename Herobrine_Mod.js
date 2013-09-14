var playerSkin = 0;
var LastTorchX;
var LastTorchY;
var LastTorchZ;
var Active = 0;
var Temp;

function useItem(x,y,z,itemId,blockId)
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
                setNightMode(14500)
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
	   else if(itemId==259&&blockId==41)
	   {
   		      preventDefault();
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
         		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
         		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
                bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
         		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
         		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
	    		 bl_spawnMob(x, y+1, z, 35, "mob/spiderbrine.png");
                setNightMode(14500);
                clientMessage("GET HIM MY MINIONS")
	}
	else if(itemId==259&&blockId==45)
	{
	preventDefault();
	bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     bl_spawnMob(x, y+1, z, 34, "mob/skeletonbrine.png");
     setNightMode(14500);
     clientMessage ("GET HIM MY MINIONS")
	}
	else if(itemId==259&&blockId==98)
	{
	preventDefault();
	bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     bl_spawnMob(x, y+1, z, 32, "mob/zombiebrine.png");
     setNightMode(14500);
     clientMessage("GET HIM MY MINIONS")
     }
	else if(itemId==345&&blockId==57)
	{ 
	if (playerSkin==1)
	{
	preventDefault();
	bl_setMobSkin(getPlayerEnt(), "mob/Herobrine.png");
	playerSkin=0;
	} 
	else if (playerSkin==0)
	{
	preventDefault();
	bl_setMobSkin(getPlayerEnt(), "mob/char.png");
	playerSkin=1;
     }
	}
	else if(itemId == 264 && blockId == 42)
	{
		if(Active == 0)
		{
			Active = 1;
			clientMessage("Herobrine Is Now following you!");
	          spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
               setNightMode(14500);
			
			LastTorchX = getPlayerX();
			LastTorchY = getPlayerY();
			LastTorchZ = getPlayerZ();
		}
		else
		if(Active == 1)
		{
			Active = 0;
			clientMessage("Scaredy cat but Herobrine will not follow you anymore");
		}
		preventDefault();
	}
}

function placeTorch(x,y,z)
{
     spawnPigZombie(x, y, z, 276, "mob/Herobrine.png");
	LastTorchX = x;
	LastTorchY = y;
	LastTorchZ = z;
}

function modTick()
{

	if(Active == 1)
	{
	Temp = getPlayerX() - LastTorchX;
	if(Temp < 0) {Temp = -Temp;}
	if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
	else
	{
		Temp = getPlayerY() - LastTorchY;
		if(Temp < 0) {Temp = -Temp;}
		if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
		else
		{
			Temp = getPlayerZ() - LastTorchZ;
			if(Temp < 0) {Temp = -Temp;}
			if(Temp > 10) {placeTorch(getPlayerX(), getPlayerY(), getPlayerZ());}
		}
	}
	}
}
