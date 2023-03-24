interface User {
  readonly dbId: number;
  email: string;
  userId: string;
  googleId?: string;
  //   handlePurchase: () => string;
  handlePurchase(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
    githubToken: string,
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hardik: Admin = {
  dbId: 1245,
  role : "admin" ,
  githubToken: "git@111",
  email: "test@gmail.com", 
  userId: "111",
  handlePurchase: () => "google",
  getCoupon: (name: "GET50", value: 45) => 123
};

hardik.email = "111@gmail.com";
// hardik.dbId = 156465 not allowed

export {};
