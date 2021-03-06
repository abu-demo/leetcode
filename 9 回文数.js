function count(x) {
	if (x >= 0 && x < 10) {
		// 如果x 在[0, 10) 区间就直接返回真 
		return true;
	}
	// 如果n是负数 或者n 是10的倍数（前面判断过为0的情况了） 就肯定返回false 
	if (x < 0 || x % 10 == 0) {
		return false;
	} // 记录截取数字 
	let rn = 0;
	while (rn < x) {
		// 添加下一个数 
		rn = rn * 10 + x % 10;
		// n 截取后一位 floor向下取整 tofixed是四舍五入的 
		x = Math.floor(x / 10);
		// 打印监控 运算过程 
		console.log(`${x} ${rn}`);
	}
	return x == rn || x == Math.floor(rn / 10);
}
console.log(count(88888));