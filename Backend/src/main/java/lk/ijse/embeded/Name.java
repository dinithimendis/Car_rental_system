package lk.ijse.embeded;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Name {
    private String firstName;
    private String lastName;
}
