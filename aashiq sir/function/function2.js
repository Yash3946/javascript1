function science(per,name)
{
    return name +  " your admission is confirm in science stream in percentage of " + per
}
function commerence(per,name)
{
    return name +  " your admission is confirm in science stream in percentage of " + per
}
function arts(per,name)
{
    return name +  " your admission is confirm in science stream in percentage of " + per
}

per=93;
name="jallu"

if (per > 90)
{
    console.log(science(per,name));
}
else if (per > 70)
{
    console.log(commerence(per,name));
}
else if (per > 60)
{
    console.log(commerence(per,name))
}
else
{
    console.log("your admission is not confirm")
}
