function mystery(n){
  if(n===0) return 0;
  return 1 + mystery(n-1) + mystery(n-1);
}
