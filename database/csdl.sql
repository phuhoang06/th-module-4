create database auctiondb;
use auctiondb;

CREATE TABLE loai_sp (
                         cid INT AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(255) NOT NULL
);

CREATE TABLE san_pham (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          price DECIMAL(10, 2) NOT NULL,
                          status VARCHAR(255) NOT NULL,
                          id_loai_sp INT,
                          FOREIGN KEY (id_loai_sp) REFERENCES loai_sp(cid)
);


INSERT INTO loai_sp (name) VALUES ('Nghệ thuật');
INSERT INTO loai_sp (name) VALUES ('Điện tử');
INSERT INTO loai_sp (name) VALUES ('Thời trang');
INSERT INTO loai_sp (name) VALUES ('Gia dụng');
INSERT INTO loai_sp (name) VALUES ('Sách');
INSERT INTO loai_sp (name) VALUES ('Thể thao');
INSERT INTO loai_sp (name) VALUES ('Nội thất');
INSERT INTO loai_sp (name) VALUES ('Đồ uống');


INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Tranh Sơn Dầu', 5000000, 'Đang đấu giá', 1);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Laptop Dell XPS 15', 20000000, 'Đang đấu giá', 2);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Đồng Hồ Rolex', 50000000, 'Đang đấu giá', 3);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Điện Thoại iPhone 13', 15000000, 'Đang đấu giá', 2);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Tủ Lạnh Samsung', 10000000, 'Đang đấu giá', 4);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Sách Harry Potter', 500000, 'Đang đấu giá', 5);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Xe Đạp Thể Thao', 3000000, 'Đang đấu giá', 6);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Máy Ảnh Canon EOS', 12000000, 'Đang đấu giá', 2);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Bàn Ghế Sofa', 8000000, 'Đang đấu giá', 7);
INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES ('Chai Rượu Vang Đỏ', 1500000, 'Đang đấu giá', 8);
