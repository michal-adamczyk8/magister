-- DROP TABLE IF EXISTS shelter;
-- DROP TABLE IF EXISTS shelter_address;
--DROP SEQUENCE IF EXISTS sequence_shelter_id;

CREATE SEQUENCE sequence_shelter_id START WITH 1 INCREMENT BY 1 MAXVALUE 99999;
CREATE SEQUENCE sequence_shelter_address_id START WITH 1 INCREMENT BY 1 MAXVALUE 99999;

CREATE TABLE shelter
(
    shelter_id   NUMBER        NOT NULL AUTO_INCREMENT,
    shelter_name VARCHAR(255)  NOT NULL,
    phone_number VARCHAR(50)   NOT NULL,
    email        VARCHAR(250)  NOT NULL,
    nip          VARCHAR(10)   NOT NULL,
    regon        VARCHAR(14)   NOT NULL,
    address_id   INT           NOT NULL,
    description  VARCHAR(1000),
    image_path   VARCHAR(1000) NOT NULL,
    created_by   VARCHAR(255)  NOT NULL,
    created_at   DATE          NOT NULL,
    modified_by  VARCHAR(255),
    modified_at  DATE,
    PRIMARY KEY (shelter_id)
);

CREATE TABLE shelter_address
(
    shelter_address_id NUMBER       NOT NULL AUTO_INCREMENT,
    street_name        VARCHAR(255) NOT NULL,
    house_number       VARCHAR(5)   NOT NULL,
    flat_number        VARCHAR(5),
    city               VARCHAR(100) NOT NULL,
    zip_code           VARCHAR(6)   NOT NULL,
    created_by         VARCHAR(255) NOT NULL,
    created_at         DATE         NOT NULL,
    modified_by        VARCHAR(255),
    modified_at        DATE,
    PRIMARY KEY (shelter_address_id)
);


ALTER TABLE shelter
    ADD FOREIGN KEY (shelter_id) REFERENCES shelter (shelter_id);
