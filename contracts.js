var Contract = {};
Contract.makeContract = function(name, firstOrder, proj) {
    return {name : name, firstOrder : firstOrder, proj : proj};
};
Contract.apply = function(cnt, val, pos, neg) {
    if cnt.firstOrder(val) 
    { 
	return cnt.proj({positive : pos, negative : neg})(val); 
    };
    throw new Contract.ContractError(cnt.name, pos);
};
