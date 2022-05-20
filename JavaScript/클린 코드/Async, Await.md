 :heavy_multiplication_x:**Bad code**:rage:
```
function displayUser() {
  fetchUser()
    .then((user) => {
      fetchProfile(user)
        .then((profile) => {
          updateUI(user, profile);
    });
   });
}
```
:heavy_check_mark:**Clean code**:grin:
```
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
```

> 출처 : 유튜브 채널 '드림코딩 엘리' 자바스크립트 프로처럼 쓰는 팁
