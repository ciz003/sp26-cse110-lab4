for(const property in statistic){
    if(property.startsWith('r') || statistic[property] % 2 != 0) {
        console.log(statistic[property]);
    }
}