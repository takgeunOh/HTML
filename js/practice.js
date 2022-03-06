function showCount(count){
    console.log(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();