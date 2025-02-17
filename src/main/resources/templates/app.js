$(document).ready(function() {
    // Lấy danh sách sản phẩm từ API
    function loadProducts() {
        $.ajax({
            url: "http://localhost:8080/api/products",
            method: "GET",
            success: function(data) {
                displayProducts(data);
            },
            error: function(error) {
                console.error("Error fetching products:", error);
            }
        });
    }

    function displayProducts(products) {
        var productTable = $("#product-list");
        productTable.empty(); // Xóa các hàng cũ

        products.forEach(function(product, index) {
            var row = `
            <tr>
                <td>${index + 1}</td>
                <td><input type="checkbox" class="product-checkbox" data-id="${product.id}"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category.name}</td>
                <td>${product.status}</td>
                <td><button class="btn btn-primary edit-btn" data-id="${product.id}">Sửa</button></td>
            </tr>
        `;
            productTable.append(row);
        });

        // Xử lý sự kiện nút sửa
        $(".edit-btn").click(function() {
            var productId = $(this).data("id");
            window.location.href = `edit-product.html?id=${productId}`; // Điều hướng đến trang sửa sản phẩm với ID sản phẩm
        });
    }


    // Gọi hàm loadProducts khi trang được tải
    loadProducts();

    // Xử lý sự kiện nút tìm kiếm
    $("#search-form").submit(function(event) {
        event.preventDefault();

        var keyword = $("#search-input").val(); // Lấy giá trị từ input tìm kiếm

        $.ajax({
            url: "http://localhost:8080/api/products/search?keyword=" + keyword,
            method: "GET",
            success: function(data) {
                displayProducts(data); // Hiển thị kết quả tìm kiếm
            },
            error: function(error) {
                console.error("Error searching products:", error);
            }
        });
    });


    // Xử lý sự kiện nút xóa
    $("#delete").click(function() {
        // Lấy danh sách sản phẩm đã chọn
        var selectedProducts = [];
        $(".product-checkbox:checked").each(function() {
            selectedProducts.push($(this).data("id"));
        });

        if (selectedProducts.length > 0) {
            // Hiển thị popup xác nhận
            if (confirm("Bạn có muốn xóa tất cả sản phẩm đã chọn?")) {
                // Người dùng chọn Yes
                deleteProducts(selectedProducts);
            }
        } else {
            alert("Vui lòng chọn ít nhất một sản phẩm để xóa.");
        }
    });

    // Hàm xóa sản phẩm
    function deleteProducts(ids) {
        ids.forEach(function(id) {
            $.ajax({
                url: `http://localhost:8080/api/products/${id}`,
                method: "DELETE",
                success: function() {
                    alert("Xóa thành công!");
                    loadProducts(); // Tải lại danh sách sản phẩm
                },
                error: function(error) {
                    console.error("Error deleting product with ID " + id + ":", error);
                }
            });
        });
    }

    // Xử lý sự kiện nút thêm
    $("#add").click(function() {
        // Liên kết đến trang thêm sản phẩm
        window.location.href = "add-product-page.html";
    });
});