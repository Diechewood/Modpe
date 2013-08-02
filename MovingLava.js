 file 46 lines (40 sloc) 0.696 kb EditRawBlameHistory Delete
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
function buildCube(x,y,z,dim)
{
for(var i=0;i<dim;i++)
{
  for(var a=0;a<dim;a++)
  {
   setTile(x+i,y,z+a,56);//diamond
   setTile(x+i,y+dim-1,z+a,56);
  }
}
for(var i=0;i<dim;i++)
{
  for(var a=0;a<dim;a++)
  {
   setTile(x,y+i,z+a,57);
   setTile(x+dim-1,y+i,z+a,246);

  }
}
sayHayGurl("y0 philDawggg");
}
function sayHayGurl(msg)
{
print("HAY: "+msg);
}
function useItem(x,y,z,itemId,blockId)//hook
{
if(itemId==352)//Bone
{
  setTile(x,y,z,89);//Glowstone
}
else if(itemId==264) 
{ 
  buildCube(x,y,z,10);
}
else if(itemId==280)//If your item is a stick

        {

                addItemInventory(10,64);//Add 5 Dirt blocks to your inventory.

                print("Hay. :D");
     }

}
