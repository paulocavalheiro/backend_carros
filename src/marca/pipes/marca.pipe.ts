import {
    PipeTransform,
    BadRequestException,
    ArgumentMetadata,
} from '@nestjs/common'

export class MarcaValidacao implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException(
                `Parametro ${metadata.data}, não pode ser vazio.`
            )
        }
        return value
    }
}
