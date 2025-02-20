function science  (name,per)
{
    return name + "your admission is confirm in science stream" + per
}
function commerce  (name,per)
{
    return name + "your admission is confirm in commerce stream" + per
}
function arts  (name,per)
{
    return name + "your admission is confirm in arts stream" + per
}

function admission(name,per,cb)
{
    return cb(name,per)
}

var per=94;
var flag;

if(per > 90)
{
    flag = admission(" yash ", per , science )
}
else if(per > 70)
{
    flag = admission("jallu",per,commerce)
}    
else if(per > 50)
{
    flag = admission("jogesh",per,arts)
}
else
{
    console.log("your admission is not success");  
}
console.log(flag)
