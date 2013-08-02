var x1;
var x2;
var y1;
var y2;
var z1;
var z2;
var CubeBlock;
var Mode = 0;
// Modes:
// 0 - wait for 1st block
// 1 - wait for 2nd block
// 2 - wait for block id

function createHollowCuboid(x1,y1,z1,x2,y2,z2,CubeBlock)
{
	var lowestX;
	var lowestY;
	var lowestZ;
	var highestX;
	var highestY;
	var highestZ;
	if(x1 < x2) {
	lowestX = x1;
	highestX = x2;}

else{
lowestX = x2;
highestX = x1;
}
if(y1 < y2) {
lowestY = y1;
highestY = y2;}

else{
lowestY = y2;
highestY = y1;
}
if(z1 < z2) {
lowestZ = z1;
highestZ = z2;}

else{
lowestZ = z2;
highestZ = z1;
}

	for(var x = lowestX; x <= highestX; x++)
	{
		for(var y = lowestY; y <= highestY; y++)
		{
			setTile(x,y,lowestZ,CubeBlock);
			setTile(x,y,highestZ,CubeBlock);
			for(var z = lowestZ; z <= highestZ; z++)
			{
				setTile(x,lowestY,z,CubeBlock);
				setTile(x,highestY,z,CubeBlock);
				setTile(lowestX,y,z,CubeBlock);
				setTile(highestX,y,z,CubeBlock);
			}
		}
	}
	print("Created a hollow cuboid!");
}

function useItem(x,y,z,itemId,blockId)
{
        if(itemId == 292) //If the item you use is a Iron Hoe
        { //wrote them backwards because reasons:
			if(Mode == 2)
			{
				CubeBlock = blockId;
				print("Material selected - " + CubeBlock);
				createHollowCuboid(x1,y1,z1,x2,y2,z2,CubeBlock);
				Mode = 3;
			}
		
			if(Mode == 1)
			{
				x2 = x;
				y2 = y;
				z2 = z;
				print("Position #2 saved at"+ x2 +", "+ y2 +", "+ z2 +".");
				Mode = 2; // Time for block selection!
			}
		
			if(Mode == 0)
			{
				x1 = x;
				y1 = y;
				z1 = z;
				print("Position #1 saved at"+ x1 +", "+ y1 +", "+ z1 +".");
				Mode = 1; // Time for second one!
			}
			
			if(Mode == 3) {Mode = 0;}
			preventDefault();
        }
        
}
