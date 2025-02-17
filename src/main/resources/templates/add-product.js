$(document).ready(function() {
    // Tải danh sách loại sản phẩm
    function loadCategories() {
        $.ajax({
            url: "http://localhost:8080/api/categories",
            method: "GET",
            success: function(data) {
                populateCategories(data);
            },
            error: function(error) {
                console.error("Error fetching categories:", error);
            }
        });
    }

    // Hiển thị danh sách loại sản phẩm trong dropdown
    function populateCategories(categories) {
        var categorySelect = $("#category");
        categorySelect.empty();
        categories.forEach(function(category) {
            var option = `<option value="${category.cid}">${category.name}</option>`;
            categorySelect.append(option);
        });
    }

    // Gọi hàm loadCategories khi trang được tải
    loadCategories();

    // Xử lý sự kiện submit form thêm sản phẩm
    $("#add-product-form").submit(function(event) {
        event.preventDefault();

        var product = {
            name: $("#name").val(),
            price: $("#price").val(),
            category: { cid: $("#category").val() },
            status: $("#status").val()
        };

        $.ajax({
            url: "http://localhost:8080/api/products",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function() {
                alert("Thêm sản phẩm thành công!");
                window.location.href = "index.html"; // Quay lại trang quản lý sản phẩm
            },
            error: function(error) {
                console.error("Error adding product:", error);
            }
        });
    });

    // Xử lý sự kiện nút hủy
    $("#cancel").click(function() {
        window.location.href = "index.html"; // Quay lại trang quản lý sản phẩm
    });
});
