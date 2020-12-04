class MailPassGen {
  rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
  }
  makePassword(len) {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var ret = "";
    for (var i = 0; i < len; i++)
      ret += symbols[this.rand(0, symbols.length - 1)];
    return ret;
}
  getEmail() {
    const endings = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"];
    var a = this.makePassword(this.rand(5, 7)),
        b = this.makePassword(this.rand(5, 7));
    return a + b + "@" + endings[this.rand(0, endings.length - 1)];
  }
}

module.exports = new MailPassGen();