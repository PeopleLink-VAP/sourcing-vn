export const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 grid gap-4 md:grid-cols-3">
        <div>
          <p className="font-semibold">sourcing<span className="text-accent">.vn</span></p>
          <p className="text-sm text-muted-foreground mt-2">
            Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            Office: An Khánh, TP Thủ Đức, TP.HCM, Việt Nam
          </p>
          <p className="text-sm text-muted-foreground">Email: contact@sourcing.vn</p>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} sourcing.vn · All rights reserved
        </div>
      </div>
    </footer>
  );
};
