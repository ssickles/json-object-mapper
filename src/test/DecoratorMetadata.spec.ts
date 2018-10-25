import { AccessType, JsonProperty, JsonPropertyDecoratorMetadata } from '../main/DecoratorMetadata';
import { getJsonPropertyMetadata } from '../main/ReflectHelper';

describe('Testing JsonProperty decorator', () => {
    it('Test without any parameter', () => {
        class TestObject1 {
            @JsonProperty()
            field: string;
        }

        const instance = new TestObject1();
        const jsonPropertyDecoratorMetadata: JsonPropertyDecoratorMetadata = getJsonPropertyMetadata(instance, 'field');
        expect(jsonPropertyDecoratorMetadata.name).toBe('field');
        expect(jsonPropertyDecoratorMetadata.type).toBe(String);
    });
    it('Test with name', () => {
        class TestObject2 {
            @JsonProperty('Test')
            field: String = undefined;
        }

        const instance = new TestObject2();
        const jsonPropertyDecoratorMetadata: JsonPropertyDecoratorMetadata = getJsonPropertyMetadata(instance, 'field');
        expect(jsonPropertyDecoratorMetadata.name).toBe('Test');
        expect(jsonPropertyDecoratorMetadata.type).toBe(String);
    });

    it('Test with parameters', () => {
        class TestObject3 {
            @JsonProperty({ required: true, access: AccessType.READ_ONLY })
            field: String = undefined;
        }

        const instance = new TestObject3();
        const jsonPropertyDecoratorMetadata: JsonPropertyDecoratorMetadata = getJsonPropertyMetadata(instance, 'field');
        expect(jsonPropertyDecoratorMetadata.name).toBe('field');
        expect(jsonPropertyDecoratorMetadata.type).toBe(String);
        expect(jsonPropertyDecoratorMetadata.required).toBe(true);
        expect(jsonPropertyDecoratorMetadata.access).toBe(AccessType.READ_ONLY);
    });
});
