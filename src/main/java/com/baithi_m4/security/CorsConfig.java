package com.baithi_m4.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:63342"); // Nguồn gốc cho phép
        config.addAllowedHeader("*"); // Cho phép tất cả headers
        config.addAllowedMethod("*"); // Cho phép tất cả phương thức (GET, POST, PUT, DELETE,...)
        source.registerCorsConfiguration("/**", config); // Đường dẫn cho phép CORS
        return new CorsFilter(source);
    }
}
