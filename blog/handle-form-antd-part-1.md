---
sidebar_position: 3
title: Xử lý form với Ant Design (Phần 1)
authors: hunghg
tags: [Reactjs, Ant Design]
---

Cách xử lý form trong Ant Design sao cho đúng.

<!--truncate-->

### 1. Cơ chế hoạt động

Ta xét một ví dụ đơn giản như sau:

```tsx
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const App = () => (
  <Form onFinish={onFinish}>
    <Form.Item name='username'>
      <Input />
    </Form.Item>

    <Button type='primary' htmlType='submit'>
      Submit
    </Button>
  </Form>
);
```

![Demo 1](https://res.cloudinary.com/hunghg255/image/upload/v1679199291/blog/Screenshot_2023-03-19_at_11.14.37_lp70zv.png)

Như ta thấy khi đặt component `Input` trong `Form.Item` với `name` là `username` thì khi submit sẽ nhận được một object với key là `username` và value là giá trị của input.

Vậy có phải cứ đặt `Input` bên trong `Form.Item` là ta sẽ lấy được value của Input khi submit không?
Mình sẽ tuỳ custom xíu là thêm cái label hoặc cần tuỳ biến input thêm prefix hoặc suffix icon

```tsx
<Form.Item name='username'>
  <Row>
    <label>Username</label>
    <Input />
  </Row>
</Form.Item>
```

![Demo 2](https://res.cloudinary.com/hunghg255/image/upload/v1679200848/blog/Screenshot_2023-03-19_at_11.40.41_onm9lw.png)

Vẫn cho mình cùng kết quả. nếu ta muốn dùng nhiều nơi thì phải copy sang nhiều chỗ khác nhau. vậy mình sẽ tách thành một component để sau có thể tái sử dụng

```tsx
const CustomInput = () => {
  return (
    <Row>
      <label>Username</label>
      <Input />
    </Row>
  );
};

<Form.Item name='username'>
  <CustomInput />
</Form.Item>;
```

![Demo 3](https://res.cloudinary.com/hunghg255/image/upload/v1679200637/blog/Screenshot_2023-03-19_at_11.37.10_ixmjsf.png)

Mình kiểm tra lại kết quả xem sao. Ops kết quả không như ta mong đợi. Khi tách thành component để có thể tái sử dụng thì không còn lấy được value của `input` nữa. Vậy chuyện gì đã xảy ra mà khi đặt trong `Form.Item` thì có kết quả và mình muốn tách ra có thể tái sử dụng lại không hoạt động.

Mình sẽ kiểm tra `props` của `CustomInput` xem có gì bất thường không nhé =)))

![props](https://res.cloudinary.com/hunghg255/image/upload/v1679201545/blog/Screenshot_2023-03-19_at_11.52.18_byltfn.png)

> Như ta thấy `props` của `CustomInput` là một object chứa `id`, `value`, `onChange`. Tức là khi ta đặt Input ngay bên trong `Form.Item` thì nó tự động pass props đó vào cho `Input` vì vậy ta sẽ lấy được value của Input.

> Khi mình tách ra thành một component để tái sử dụng thì `value` và `onChange` sẽ không được pass vào Input nữa nên ta sẽ không lấy được value của Input

Ok. vậy mình sẽ thử fix bằng cách pass `value` và `onChange` vào Input xem sao.

![fix](https://res.cloudinary.com/hunghg255/image/upload/v1679202119/blog/Screenshot_2023-03-19_at_12.01.50_lk5yyg.png)

Oh. Hihi kết quả như mong đợi

> Kết luận: Khi ta muốn truyền value từ component bất kì lên `Form.Item` ta chỉ cần
> dùng hàm `onChange` từ `Form.Item` cái mà được truyền xuống props khi đặt component trong `Form.Item`

### 2. Cơ chế hoạt động `dependencies`, `shouldUpdate` và `useWatch`

#### a. Dependencies

Mình có một ví dụ đơn giản như sau: có 3 select gồm tỉnh, huyện, xã.
Yêu cầu: Khi chọn tỉnh thì sẽ tải danh sách huyện, khi chọn huyện thì sẽ tải danh sách xã.

Sẽ có nhiều cách xử lý bài toán này. như một số anh em sẽ xử lý bằng cách dùng state lưu lại giá trị tỉnh, huyện, xã. có thay đổi về state thì lắng nghe trong `useEffect` để tải list huyện, xã. Cách này sẽ ảnh hưởng đến performance nếu mà form có nhiều field.

Ở đây mình sẽ chọn cách giải quyết băng cách dùng `dependencies`

Đầu tiên mình sẽ tạo custom select tỉnh, huyện, xã:

Bình thường data sẽ được lấy từ API nhưng trong ví dụ này mình sẽ tải về sẵn luôn.

```tsx
// Lấy data các tỉnh từ API
const SelectProvince = (props) => {
  const { value, onChange } = props;

  return (
    <Select
      placeholder='Chọn Tỉnh'
      value={value}
      onChange={onChange}
      options={provinces.map((provinceItem) => {
        return {
          label: provinceItem.name_with_type,
          value: provinceItem.code,
        };
      })}
    />
  );
};
```

```tsx
// Lấy data các huyện phụ thuộc vào tỉnh đã chọn từ API
const SelectDistrict = (props) => {
  const { value, onChange, province } = props;

  const districtsData = React.useMemo(() => {
    if (!province) return [];

    return districts.filter((districtItem) => {
      return districtItem.parent_code === province;
    });
  }, [province]);

  return (
    <Select
      placeholder='Chọn Huyện'
      value={value}
      onChange={onChange}
      options={districtsData.map((districtItem) => {
        return {
          label: districtItem.name_with_type,
          value: districtItem.code,
        };
      })}
    />
  );
};
```

```tsx
// Lấy data các xã phụ thuộc vào huyện đã chọn từ API
const SelectWard = (props) => {
  const { value, onChange, district } = props;

  const wardsData = React.useMemo(() => {
    if (!district) return [];

    return wards.filter((wardItem) => {
      return wardItem.parent_code === district;
    });
  }, [district]);

  return (
    <Select
      placeholder='Chọn Xã'
      value={value}
      onChange={onChange}
      options={wardsData.map((wardItem) => {
        return {
          label: wardItem.name_with_type,
          value: wardItem.code,
        };
      })}
    />
  );
};
```

File App của mình

```tsx
const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name='province'>
        <SelectProvince />
      </Form.Item>

      <Form.Item name='district'>
        <SelectDistrict />
      </Form.Item>

      <Form.Item name='ward'>
        <SelectWard />
      </Form.Item>

      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  );
};
```

Kết quả:

![demo4](https://res.cloudinary.com/hunghg255/image/upload/v1679220579/blog/Screenshot_2023-03-19_at_17.09.29_lqob6e.png)

Hiện tại thì bạn đã thấy là chưa thể chọn được huyện và xã. giờ mình sẽ thêm `dependencies` để mỗi khi chọn xong tỉnh thì huyện sẽ update lại

```tsx
<Form.Item dependencies={['province']} noStyle>
  {(props) => {
    return (
      <Form.Item name='district'>
        <SelectDistrict province={props.getFieldValue('province')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

```tsx
<Form.Item dependencies={['district']} noStyle>
  {(props) => {
    return (
      <Form.Item name='ward'>
        <SelectWard district={props.getFieldValue('district')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

Mình sẽ wrap bằng 1 `Form.Item` nữa và thêm `dependencies` là mảng name của item mà mình sẽ muốn xem sự thay đổi. Log props ở trên ra thì mình sẽ thấy được các method của form instance

![demo](https://res.cloudinary.com/hunghg255/image/upload/v1679221251/blog/Screenshot_2023-03-19_at_17.20.43_uj4n9d.png)

Với `SelectDistrict` mình cần truyền thêm prop `province`

Với `SelectWard` mình cần truyền thêm prop `district`

Đây là kết quả đạt được:

<stackblitz name={'react-ts-3nasfc'} />

> Một điều nữa là mình cần làm là reset field đã chọn khi mình thay đổi tỉnh hoặc huyện khác =))))

#### b. shouldUpdate

```tsx
<Form.Item shouldUpdate noStyle>
  {(props) => {
    return (
      <Form.Item name='district'>
        <SelectDistrict province={props.getFieldValue('province')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

```tsx
<Form.Item shouldUpdate noStyle>
  {(props) => {
    return (
      <Form.Item name='ward'>
        <SelectWard district={props.getFieldValue('district')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

Với `shouldUpdate` thì cũng sẽ tương tự như `dependencies` nhưng nếu để `shouldUpdate` là true thì mỗi khi field nào trong form thay đổi thì component của mình sẽ re-render lại,
để tránh re-render thì mình sẽ truyền vào 1 callback function để tra field nào mình muốn kiểm tra sự thay đổi

```tsx
<Form.Item
  shouldUpdate={(prevValue, nextValue) => prevValue.province !== nextValue.province}
  noStyle
>
  {(props) => {
    return (
      <Form.Item name='district'>
        <SelectDistrict province={props.getFieldValue('province')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

```tsx
<Form.Item
  shouldUpdate={(prevValue, nextValue) => prevValue.district !== nextValue.district}
  noStyle
>
  {(props) => {
    return (
      <Form.Item name='ward'>
        <SelectWard district={props.getFieldValue('district')} />
      </Form.Item>
    );
  }}
</Form.Item>
```

Kết quả cũng tương tự như dùng `dependencies`

<stackblitz name={'react-ts-2nfddq'} />

#### c. useWatch

`useWatch` là một hook được cung cấp bới form antd, dùng để lắng nghe những field mà có thay đổi

Mình sẽ update lại 2 component select của mình như sau: Thay vì truyền từ props xuống thì mình dùng `useWatch` để lấy data mới nhất khi có thay đổi

```tsx
const SelectDistrict = (props) => {
  const { value, onChange } = props;
  const province = Form.useWatch(['province']);

  ...
};
```

```tsx
const SelectWard = (props) => {
  const { value, onChange } = props;
  const province = Form.useWatch(['district']);

  ...
};
```

Kết quả vẫn như mình mong đợi:

<stackblitz name={'react-ts-xdx9id'} />
