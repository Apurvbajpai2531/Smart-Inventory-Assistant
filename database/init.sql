CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  quantity INT
);

INSERT INTO products (name, quantity) VALUES
('Item A', 10),
('Item B', 2);
