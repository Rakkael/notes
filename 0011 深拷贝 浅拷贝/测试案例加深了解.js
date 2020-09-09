var A = {
    a: 1,
    b: function () {
        console.log(this.a);
    },
    c: {
        a1: 'a1',
        b2: 'b2'
    },
    d: 4
};

var B = {}

for (let key in A) {
    B[key] = A[key];
}

B.b(); // 1
B.a = 2;
B.b();  // 2
A.b(); // 1  改新不改旧
// console.log(B.c);
B.c.a1 = '1a';
console.log(A.c);   // 第二层 改新会改旧
console.log(B.c);