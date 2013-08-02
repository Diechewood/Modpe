function useItem(x,y,z,itemId,blockId)
{
        if(itemId==325)//If your item is a Bucket
        {                addItemInventory(10,64);//Add 5 Dirt blocks to your inventory.
                print("HAY WORLD :D");
        }       
}
function attackHook(attacker, victim)
{
        if(getCarriedItem()==280)//If your item is a stick
        {
                preventDefault();//Don't call the real attack function after
                setVelY(victim,1.5);//Make them fly vertically =)
        }
}
