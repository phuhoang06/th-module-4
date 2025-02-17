$(document).ready(function() {
    var productId = getParameterByName('id'); // Lấy ID sản phẩm từ URL

    // Tải danh sách loại sản phẩm
    function loadCategories(selectedCategory) {
        $.ajax({
            url: "http://localhost:8080/api/categories",
            method: "GET",
            success: function(data) {
                populateCategories(data, selectedCategory);
            },
            error: function(error) {
                console.error("Error fetching categories:", error);
            }
        });
    }

    // Hiển thị danh sách loại sản phẩm trong dropdown
    function populateCategories(categories, selectedCategory) {
        var categorySelect = $("#category");
        categorySelect.empty();
        categories.forEach(function(category) {
            var selected = category.cid == selectedCategory ? 'selected' : '';
            var option = `<option value="${category.cid}" ${selected}>${category.name}</option>`;
            categorySelect.append(option);
        });
    }

    // Lấy thông tin sản phẩm cần sửa
    function loadProduct() {
        $.ajax({
            url: `http://localhost:8080/api/products/${productId}`,
            method: "GET",
            success: function(product) {
                $("#name").val(product.name);
                $("#price").val(product.price);
                $("#status").val(product.status);
                loadCategories(product.category.cid);
            },
            error: function(error) {
                console.error("Error fetching product:", error);
            }
        });
    }

    // Gọi hàm loadProduct khi trang được tải
    loadProduct();

    // Xử lý sự kiện submit form sửa sản phẩm
    $("#edit-product-form").submit(function(event) {
        event.preventDefault();

        var product = {
            id: productId,
            name: $("#name").val(),
            price: $("#price").val(),
            category: { cid: $("#category").val() },
            status: $("#status").val()
        };

        $.ajax({
            url: `http://localhost:8080/api/products/${productId}`,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function() {
                alert("Sửa sản phẩm thành công!");
                window.location.href = "index.html"; // Quay lại trang quản lý sản phẩm
            },
            error: function(error) {
                console.error("Error updating product:", error);
            }
        });
    });

    // Xử lý sự kiện nút hủy
    $("#cancel").click(function() {
        window.location.href = "index.html"; // Quay lại trang quản lý sản phẩm
    });

    // Hàm để lấy tham số từ URL
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
});
