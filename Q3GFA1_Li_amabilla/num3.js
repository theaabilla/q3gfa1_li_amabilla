let text = "Do you wish to share your personal information?";
var nickname = "Karen";
var height = 62;
var weight = 50;
if (confirm(text) == true)
{
    console.log
    (
        "Name: " + nickname + "\n" +
        "Height: " + height*0.83 + "\n" +
        "Weight: " + weight*2.20462 + " lbs"
    );
}
else
{
    console.log ("“User does not wish to share his/her information.");
}